import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  getlist(){
    return this.http.get<any>('https://uat.utopiatech.in:4520/panel/gettestlist?org_id=3')
  }
}
