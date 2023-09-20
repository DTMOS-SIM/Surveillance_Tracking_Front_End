import {NodeInterface} from "../interfaces/node.interface";

export const nodeList: NodeInterface[] = [
  {
    id: "0001",
    name: "Surveillance_1",
    x: 300,
    y: 300,
    partners: [
      {
        id: "0003",
        name: "Surveillance_3",
        angle: [27, 87]
      },
      {
        id: "0004",
        name: "Surveillance _4",
        angle: [115, 176]
      },
      {
        id: "0002",
        name: "Surveillance_2",
        angle: [87, 115]
      },
    ],
    dateCreated: 1686024659,
    dateUpdated: 1686024659
  },
  {
    id: "0002",
    name: "Surveillance_2",
    x: 800,
    y: 300,
    partners: [
      {
        id: "0004",
        name: "Surveillance_4",
        angle: [27, 87]
      },
      {
        id: "0003",
        name: "Surveillance_3",
        angle: [115, 176]
      },
      {
        id: "0001",
        name: "Surveillance_1",
        angle: [87, 115]
      },
    ],
    dateCreated: 1686034521,
    dateUpdated: 1686034521
  },
  {
    id: "0004",
    name: "Surveillance_4",
    x: 550,
    y: 100,
    partners: [
      {
        id: "0001",
        name: "Surveillance_1",
        angle: [27, 87]
      },
      {
        id: "0002",
        name: "Surveillance_2",
        angle: [115, 176]
      },
    ],
    dateCreated: 1686036775,
    dateUpdated: 1686036775
  },
  {
    id: "0003",
    name: "Surveillance_3",
    x: 550,
    y: 500,
    partners: [
      {
        id: "0002",
        name: "Surveillance_2",
        angle: [27, 87]
      },
      {
        id: "0001",
        name: "Surveillance_1",
        angle: [115, 176]
      },
    ],
    dateCreated: 1686040916,
    dateUpdated: 1686040916
  },
]
