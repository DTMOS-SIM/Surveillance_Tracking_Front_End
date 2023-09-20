import {Component, OnInit} from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import {NodeInterface} from "../../interfaces/node.interface";
import {GraphService} from "./graph.service";
import {map} from "rxjs";

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  isVisible = false;
  isConfirmLoading = false;
  nodeDetails = {} as NodeInterface

  constructor(private modalService: NzModalService,
              private graphService: GraphService) { }

  onChartClick(event: NodeInterface):void {
    this.nodeDetails = event
    this.isVisible = true
    //console.log(event)
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  ngOnInit() {
  }

}
