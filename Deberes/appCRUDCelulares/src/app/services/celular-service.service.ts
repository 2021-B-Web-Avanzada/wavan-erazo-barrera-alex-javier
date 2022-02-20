import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Celular } from '../interfaces/celular.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CelularServiceService {
  url: string = environment.url;
  constructor(
    private http: HttpClient
  ) { }
  getCelulares(id_marca: number){
    return this.http.get<Celular[]>(`${this.url}/api/${id_marca}`)

  }
}
