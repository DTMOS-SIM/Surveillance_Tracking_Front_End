import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  private url = "http://127.0.0.1:8000/"

  async get_all_nodes(): Promise<Observable<any[]>> {
    return this.http.get<any>(this.url + 'node/get_partner_list/',);
  }

  constructor(private http: HttpClient) { }
}
