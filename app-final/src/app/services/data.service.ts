import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sale } from '../models/sale';


const API_PATH = 'https://65307d6f6c756603295eae35.mockapi.io/';


@Injectable({
  providedIn: 'root'
})

export class DatasService {

  constructor(private http: HttpClient) { 
  }
  
  getDataListas():Observable<Sale[]>{
    const path = API_PATH +'ventas';
    return this.http.get<Sale[]>(path);
  }
}
