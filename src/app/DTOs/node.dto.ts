import {NodeInterface, PartnerNodeInterface} from "../interfaces/node.interface";

export class NodeDto implements NodeInterface {
  dateCreated: number = 0;
  dateUpdated: number = 0;
  x: number = 0;
  y: number = 0;
  id: string = "";
  name: string = "";
  partners: PartnerNodeInterface[] = [] as PartnerNodeInterface[];

  constructor(id: string, name: string, x: number, y:number, partner: PartnerNodeInterface[], dateCreated:number, dateUpdated:number) {
    this.id = id
    this.name = name
    this.x = x
    this.y = y
    this.partners = partner
    this.dateCreated = dateCreated
    this.dateUpdated = dateUpdated
  }
}


export class PartnerNodeDto implements PartnerNodeInterface {
  angle: number[] = [];
  id: string = "";
  name: string = "";

  constructor(id:string, name: string, angle: number[]) {
    this.id = id
    this.name = name
    this.angle = angle
  }

}
