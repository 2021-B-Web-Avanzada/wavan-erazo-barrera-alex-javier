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
    // this.buscarUsuarios()
    this.activatedRoute
      .queryParams
      .subscribe(
        queryParams => {
          this.buscarUsuario = queryParams['name']
          this.buscarUsuarios();

    })
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
