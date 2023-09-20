import {Component, OnInit} from '@angular/core';
import {FormControl, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {PartnerNodeFormInterface} from "../../../interfaces/node.interface";
import {NodeService} from "../node.service";
import {catchError, throwError} from "rxjs";
import {NzNotificationService} from "ng-zorro-antd/notification";

@Component({
  selector: 'app-add-node',
  templateUrl: './add-node.component.html',
  styleUrls: ['./add-node.component.css']
})
export class AddNodeComponent implements OnInit {
  nodeForm!: UntypedFormGroup;
  addPartnerForm!: UntypedFormGroup;
  addedPartners: PartnerNodeFormInterface[] = []
  surveillance_select_list: any[] = []
  partnerModal = false
  loading = false;
  select_list = []



  async submitForm(): Promise<any> {
    this.nodeForm.value["partners"] = this.addedPartners;
    this.nodeForm.value["date_created"] = new Date().getTime()
    this.nodeForm.value["date_updated"] = new Date().getTime()
    console.log('submit', this.nodeForm.value);

    // Check if partner exists
    if (this.addedPartners.length > 0) {

      let sumList = []

      // Iterate through partners array
      for await (let partner of this.addedPartners) {

        // Get existing X and Y values
        let result = await this.get_surveillance_xy_values(partner.name)
        //console.log("X and Y Values:", result)

        // Get angle facing from source
        let newAngle = NodeService.calculate_angle_inverse([Number(partner.angle_start), Number(partner.angle_end)])
        //console.log("New Angle:", newAngle)

        // Compute magnitude of facing from angle
        let newMag = NodeService.calculate_magnitude(newAngle)
        //console.log("New Mag:", newMag)

        // Compute new X and Y coordinate from previous values
        let new_coord = NodeService.calculate_xy_coordinates(newAngle,result,newMag? newMag : 100)
        //console.log("New X & Y Coordinates:", new_coord)

        // Add to list
        sumList.push(new_coord)

      }
      // Check to ensure that
      this.compute_mean_position(sumList).then(() => {
        let responses = this.create_user_info()
      })

    }
  }
  showModal(): void {
    this.partnerModal = true;
  }
  async confirmPartner() {
    let new_value =  this.addPartnerForm.value['name']

    // Sort new dict for surveillance id and name extraction
    for await (let surveillance of this.surveillance_select_list) {
      if (surveillance.id == new_value) {
        new_value = {
          "id": surveillance.id,
          "name": surveillance.name
        }
      }
    }

    // Add partner to list
    this.addedPartners.push({
      id: new_value.id,
      name: new_value.name,
      angle_end: this.addPartnerForm.value['angle_end'],
      angle_start: this.addPartnerForm.value['angle_start']
    });
    this.partnerModal = false;
  }
  cancelPartner(): void {
    this.partnerModal = false;
  }
  async get_surveillance_xy_values(partner_name: string) {
    for await (const surveillance of this.surveillance_select_list) {
      if (surveillance.name == partner_name) {
        return [surveillance.x_position, surveillance.y_position]
      }
    }
    return []
  }
  async compute_mean_position(sumList: any) {
    // Check if re-centering of node position is required.
    let mean_x = 0
    let mean_y = 0

    // Check if the sumList consist of more than 1 surveillance reference
    if (sumList.length > 0) {
      for await (let [first, second] of sumList) {
        mean_x += first
        mean_y += second
      }
      this.nodeForm.value['x_position'] = mean_x
      this.nodeForm.value['y_position'] = mean_y
    }
    else {
      this.nodeForm.value['x_position'] = sumList[0][0]
      this.nodeForm.value['y_position'] = sumList[0][1]
    }
  }
  async create_user_info(){
    try {
      // Map user to dict
      let current_user = {
        "name": this.nodeForm.value['name'],
        "x_position": this.nodeForm.value['x_position'],
        "y_position": this.nodeForm.value['y_position'],
        "date_created": Math.floor(Date.now() / 1000),
        "date_updated": Math.floor(Date.now() / 1000),
      }

      let response = this.nodeService.post_node(JSON.stringify(current_user))

      response.then(obs => {
        obs.pipe(
          catchError(error => {
            return throwError(error)
          })
        )
          .subscribe(async(result) => {
            // Assign relations for partners
            let new_id = result.pk
            for await (let partner of this.nodeForm.value['partners']) {

              // Declare new variable
              let new_partner = {
                "from_person": new_id,
                "to_person": partner.id,
                "angle_start": partner.angle_start,
                "angle_end": partner.angle_end,
                "date_created": Math.floor(Date.now() / 1000),
                "date_updated": Math.floor(Date.now() / 1000)
              }

              // Post partners
              let partner_response = await this.nodeService.post_partner(JSON.stringify(new_partner))

              partner_response.pipe(
                  catchError(error => {
                    return throwError(error)
                  })
                ).subscribe(data => {
                  console.log(data)
                })
            }

            this.nodeForm.reset()
            this.addPartnerForm.reset()
            this.addedPartners = []
          })
      })

    }
    catch (err: any) {
      this.notification.create(
        'error',
        'Notification Title',
        err.toString()
      );
    }
  }

  constructor(
    private fb: UntypedFormBuilder,
    private nodeService: NodeService,
    private notification: NzNotificationService
  ) {}

  ngOnInit(): void {
    // Get all nodes from http GET
    this.nodeService.get_all_nodes().then(response => {
      response.subscribe(data => {
        this.surveillance_select_list = data
      })
    })

    this.nodeForm = this.fb.group({
      id: new FormControl({value: '0000-11111', disabled: true}, Validators.required),
      name: new FormControl({value: '', disabled: false}, Validators.required),
      x_position: new FormControl({ value: '', disabled: false}),
      y_position: new FormControl({ value: '', disabled: false}),
      partners: [],
      dateCreated: new FormControl({value: Date.now(), disabled: true}, Validators.required),
      dateUpdated: new FormControl({value: Date.now(), disabled: true}, Validators.required),
    });

    this.addPartnerForm = this.fb.group({
      id: new FormControl({value: '', disabled: true}, Validators.required),
      name: new FormControl({value: '', disabled: false}, Validators.required),
      angle_start: new FormControl({value: 0, disabled: false}, Validators.required),
      angle_end: new FormControl({value: 0, disabled: false}, Validators.required),
    })
  }
}
