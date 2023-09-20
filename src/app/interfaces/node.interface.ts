export interface NodeInterface {
  id: string,
  name : string,
  x: number,
  y: number
  partners: PartnerNodeInterface[],
  dateCreated: number,
  dateUpdated: number
}

export interface PartnerNodeInterface {
  id: string,
  name: string,
  angle: number[]
}

export interface PartnerNodeFormInterface {
  id: string,
  name: string,
  angle_start: string,
  angle_end: string
}

export interface ReportInterface {

}
