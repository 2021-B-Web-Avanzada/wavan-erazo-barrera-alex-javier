import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Marca } from '../interfaces/marcas.interfaces';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcaServiceService {
  url: string = environment.url
  public resultado: Marca[] = [];
  constructor(private http: HttpClient) {

  }

  getMarcas(){
    return this.http.get<Marca[]>(this.url + '/api')
  }
}
