import {Component, OnInit} from '@angular/core';
import {FormControl, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {PartnerNodeFormInterface} from "../../../interfaces/node.interface";

@Component({
  selector: 'app-add-edge',
  templateUrl: './add-edge.component.html',
  styleUrls: ['./add-edge.component.css']
})
export class AddEdgeComponent implements OnInit {
  edgeForm!: UntypedFormGroup;
  isConfirmLoading = false;
  loading = false;


  submitForm(): void {
    console.log('submit', this.edgeForm.value);
  }
  confirmEdge(): void {
    // Add partner to list
  }
  cancelEdge(): void {
  }

  constructor(
    private fb: UntypedFormBuilder,
  ) {}

  ngOnInit(): void {
    this.edgeForm = this.fb.group({
      id: new FormControl({value: '', disabled: true}, Validators.required),
      source: new FormControl({value: '', disabled: false}, Validators.required),
      target: new FormControl({value: '', disabled: false}, Validators.required),
      dateCreated: new FormControl({value: new Date(), disabled: true}, Validators.required),
      dateUpdated: new FormControl({value: new Date(), disabled: true}, Validators.required),
    });
  }
}
