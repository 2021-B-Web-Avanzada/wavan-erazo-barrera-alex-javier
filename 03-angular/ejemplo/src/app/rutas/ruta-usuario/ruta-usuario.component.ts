import { Component, OnInit } from '@angular/core';
import {UserJphService} from "../../servicios/http/user-jph.service";
import {error} from "@angular/compiler/src/util";
import {UserJphInterface} from "../../servicios/http/interfaces/user-jph.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.scss']
})
export class RutaUsuarioComponent implements OnInit {
  arreglo: UserJphInterface[] = [];
  buscarUsuario= '';
  constructor(
    private readonly userJphService: UserJphService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router) {

  }

  ngOnInit(): void {
    //Buena practica, que esto sea funcion
    const parametrosConsulta$ = this.activatedRoute.queryParams
    parametrosConsulta$
      .subscribe(
        {
          next: (queryParams) =>{
            console.log(queryParams);
            this.buscarUsuario=queryParams['name'];
            this.buscarUsuarios();
          },
          error: ()=>{},
          complete: () =>{}

        }
      )
  };

  actualizarParametrosDeConsulta(){
    this.router
      .navigate(
        ['/app', 'usuario'],
         {
          queryParams: {
            name: this.buscarUsuario
          }
    });
  }

  buscarUsuarios(){
    this.userJphService
      .buscarTodos()
      .subscribe(
        {
          next: (datos) => {
            this.arreglo = datos;
            this.buscarUsuario = '';
            console.log({datos})
          },

          error: (error) => {
            console.log({error})
          },
        }
      )
  }

  gestionarUsuario(idUsuario: number){}

}
