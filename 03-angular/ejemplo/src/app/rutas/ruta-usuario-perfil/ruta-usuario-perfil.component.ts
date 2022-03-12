import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserJphInterface} from "../../servicios/http/interfaces/user-jph.interface";

@Component({
  selector: 'app-ruta-usuario-perfil',
  templateUrl: './ruta-usuario-perfil.component.html',
  styleUrls: ['./ruta-usuario-perfil.component.scss']
})
export class RutaUsuarioPerfilComponent implements OnInit {
  idUsuario = 0;
  usuarioActual?: UserJphInterface;
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly userJPHService: UserJPHService,

  ) { }

  ngOnInit(): void {
    const parametroRuta$ = this.activatedRoute.params
    parametroRuta$
      .subscribe(
        {
          next: (parametrosRuta) =>{
            console.log(parametrosRuta);
            this.idUsuario = +parametrosRuta['idUsuario'];
            this.buscarUsuario(this.idUsuario)
          }
        }
      )
  }
  buscarUsuario(id: number){
    const buscarUsuarioPorId$ =this.userJPHService.buscarUno(id);
    buscarUsuarioPorId$
      .subscribe(
        {
          next: (data) =>{
            this.usuarioActual = data;

          },
          error: (error) => {
            console.log(error)
          }
  } )
  }
}
