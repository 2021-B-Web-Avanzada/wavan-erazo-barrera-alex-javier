import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserJphInterface} from "./interfaces/user-jph.interface";
import {map, Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'any'
})
export class UserJphService {

  constructor(private readonly httpClient: HttpClient) {

  }

  buscarTodos(parametrosConsulta?: any): Observable<UserJphInterface[]>{
    const url = environment.urlJPC + '/users';
    //Valida que no nos manden parametros vacios
    Object
      .keys(parametrosConsulta)
      .forEach(k=>{
        if(!parametrosConsulta[k]){
          delete parametrosConsulta[k]
        }
      })
    return this.httpClient
      .get(
        url,
    {
          params: parametrosConsulta,
        }
      )
      .pipe(
        map(
          (resultadoData: Object) => resultadoData as UserJphInterface[]
        )

      )
  }

  buscarUno(idUsuario: number): Observable<UserJphInterface>{
    const url = environment.urlJPC + '/users/' + idUsuario;
    return this.httpClient
      .get(url)
      .pipe(
        map(
          (resultadoData)=> resultadoData as UserJphInterface
        )
      )

  }
}
