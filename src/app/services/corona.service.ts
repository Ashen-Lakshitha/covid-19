import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    const url = "https://hpb.health.gov.lk/api/get-current-statistical";
    return this.http.get<any>(url);
  }
}
