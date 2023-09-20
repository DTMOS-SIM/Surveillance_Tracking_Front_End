import {Component, OnInit, Output} from '@angular/core';
import { NgxEchartsModule, NGX_ECHARTS_CONFIG } from 'ngx-echarts';
import {EChartsOption} from "echarts";
import { EventEmitter } from '@angular/core';
import {nodeList} from "../../dummy_data/node.data";
import {NodeInterface} from "../../interfaces/node.interface";
import {EGraphsOptionDataInterface, EGraphsOptionLinkInterface} from "../../interfaces/egraphoption.data";
import {GraphService} from "../../pages/graph/graph.service";
import {NgIf} from "@angular/common";

@Component({
  standalone: true,
  selector: 'my-chart',
  template: `
      <div style="height: 100%" echarts [options]="graphOptions" class="graphing" (chartClick)="onChartClick($event)"></div>
  `,
  imports: [NgxEchartsModule, NgIf],
  providers: [
    {
      provide: NGX_ECHARTS_CONFIG,
      useFactory: () => ({ echarts: () => import('echarts') })
    },
  ],
  styles: [ 'graphing { height: max-content !important; width: 100%; }' ]
})

export class SurveillanceGraphChartComponent implements OnInit{

  graphData: NodeInterface[] = []
  nodeDataSet: EGraphsOptionDataInterface[] = []
  linkDataSet: EGraphsOptionLinkInterface[] = []

  isLoading:boolean = true

  public graphOptions: any;

  @Output() chartClick = new EventEmitter();

  constructor(private graphService: GraphService) {
  }

  onChartClick(event: any):void {
    this.graphData.forEach((item) => {
      if(item.name == event.name) {
        console.log(item)
        this.chartClick.emit(item)
      }
    })
  }

  async ngOnInit() {
    // this.graphData = nodeList
    // Get data from dummy server
    let results = await this.graphService.get_all_nodes()

    results.subscribe(data => {
      // Assign graphData to main data
      this.graphData = data
      // Sort the data manually
      data.forEach((item: any) => {
        // Collect node information first
        this.dataToNode(item.id, item.name, item.x_position, item.y_position, item.date_created, item.date_updated)
        // Map partners
        item.partners.forEach((partner:any) => {
          // Collect links from partners
          console.log(item, item.x_position, item.x_position)
          this.dataToLinks([partner.angle_start, partner.angle_end], item.name ,partner.to_person_id.name)
        })
      })
      this.initChart(this.nodeDataSet, this.linkDataSet);
      this.isLoading = false
      console.log(this.nodeDataSet,this.linkDataSet)
    })


  }

  dataToNode(id:string, name: string, x:number, y:number, dateCreated: number, dateUpdated: number): void {
    let graphSingleNode: EGraphsOptionDataInterface = {
      name: name,
      x: x,
      y: y,
      value: "ID: " + id + " - Date Created: " + dateCreated.toString() + " - Date Updated: " + dateUpdated.toString()
    }
    this.nodeDataSet.push(graphSingleNode)
  }

  dataToLinks(angle:number[], source:string, target:string): void {
    let graphSingleLink: EGraphsOptionLinkInterface = {
      source: source,
      target: target,
      value: angle
    }
    this.linkDataSet.push(graphSingleLink)
  }

  initChart(nodeSet: any, linkSet: any): void {
    this.graphOptions = {
      title: {
        text: 'Simple Graph',
      },
      tooltip: {},
      animationDurationUpdate: 1500,
      animationEasingUpdate: 'quinticInOut',
      series: [
        {
          type: 'graph',
          layout: 'none',
          symbolSize: 90,
          roam: true,
          label: {
            show: true,
          },
          edgeSymbol: ['circle', 'arrow'],
          edgeSymbolSize: [6, 10],
          edgeLabel: {
            fontSize: 12,
          },
          data: nodeSet,
          links: linkSet,
          lineStyle: {
            opacity: 0.9,
            width: 2,
            curveness: 0,
          },
        },
      ],
    }
  }

}
