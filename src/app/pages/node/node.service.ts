import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NodeService {

  private url = "http://127.0.0.1:8000/"

  async get_all_nodes(): Promise<Observable<any[]>> {
    return this.http.get<any>(this.url + 'node/',);
  }

  async post_node(data:any): Promise<Observable<any>> {
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post<HttpResponse<any>>(this.url + 'node/', data, { headers: headers });
  }

  async post_partner(data:any): Promise<Observable<any>> {
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post<HttpResponse<any>>(this.url + 'partner/', data, { headers: headers });
  }

  static calculate_xy_coordinates(angle: number, oldCoordinated: number[], direction: number): number[] {

    let radiansValue = (angle % 90) * (Math.PI / 180.0)

    let y = Math.floor(Math.sin(radiansValue) * 80)
    let x = Math.floor(Math.cos(radiansValue) * 80)

    switch (direction){
      case MAGNITUDE.E:
        return [Number(oldCoordinated[0]) + x, Number(oldCoordinated[1])]
        break;
      case MAGNITUDE.SE:
        return [Number(oldCoordinated[0]) + x, Number(oldCoordinated[1]) - y]
        break;
      case MAGNITUDE.S:
        return [Number(oldCoordinated[0]), Number(oldCoordinated[1]) - y]
        break;
      case MAGNITUDE.SW:
        return [Number(oldCoordinated[0]) - x, Number(oldCoordinated[1]) - y]
        break;
      case MAGNITUDE.W:
        return [Number(oldCoordinated[0]) - x, Number(oldCoordinated[1])]
        break;
      case MAGNITUDE.NW:
        return [Number(oldCoordinated[0]) - x, Number(oldCoordinated[1]) + y]
        break;
      case MAGNITUDE.N:
        return [Number(oldCoordinated[0]), Number(oldCoordinated[1]) + y]
      case MAGNITUDE.NE:
        return [Number(oldCoordinated[0]) + x, Number(oldCoordinated[1]) + y]
      default:
        throw 100
    }
  }

  static calculate_angle_inverse(angle: number[]): number {
    let median_angle = 0
    median_angle = Math.floor(((angle[0] + angle[1]) /2))
    return ((median_angle + 180) % 360)
  }

  static calculate_magnitude(angle: number): number | null {
    if (angle == 0) {
      return MAGNITUDE.E
    }
    else if (angle < 90) {
      return MAGNITUDE.SE
    }
    else if (angle == 90) {
      return MAGNITUDE.S
    }
    else if (90 < angle && angle < 180) {
      return MAGNITUDE.SW
    }
    else if (angle == 180) {
      return MAGNITUDE.W
    }
    else if (180 < angle && angle < 270) {
      return MAGNITUDE.NW
    }
    else if (angle == 270) {
      return MAGNITUDE.N
    }
    else if (270 < angle && angle < 360) {
      return MAGNITUDE.NE
    }
    else {
      return null
    }
  }

  constructor(private http: HttpClient) { }
}


enum MAGNITUDE {
  "E" = 0,
  "SE" = 1,
  "S" = 2,
  "SW" = 3,
  "W" = 4,
  "NW" = 5,
  "N" = 6,
  "NE" = 7,
}
