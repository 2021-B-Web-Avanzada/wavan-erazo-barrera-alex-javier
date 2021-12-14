import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RutaForbiddenComponent} from "./rutas/ruta-forbidden/ruta-forbidden.component";
import {RutaNotFoundComponent} from "./rutas/ruta-not-found/ruta-not-found.component";
import {RutaLoginComponent} from "./rutas/ruta-login/ruta-login.component";
import {RutaInicioComponent} from "./rutas/ruta-inicio/ruta-inicio.component";
import {RutaUsuarioComponent} from "./rutas/ruta-usuario/ruta-usuario.component";
import {RutaPostComponent} from "./rutas/ruta-post/ruta-post.component";
import {RutaAppComponent} from "./rutas/ruta-app/ruta-app.component";

//RUTAS NECESASRIAS
//login
//inicio
//app
  //usuario
  //post del usuario
//configuracion
const routes: Routes = [
  {
    path: 'login',
    component: RutaLoginComponent,

  },
  {
    path: 'inicio',
    component: RutaInicioComponent,

  },
  {
    path: 'app',
    component: RutaAppComponent,
    children: [
      {
        path: 'usuario',
        component: RutaUsuarioComponent,
      },
      {
        path: 'post',
        component: RutaPostComponent,
      },

    ]

  },
  {
    path: 'forbidden',
    component: RutaForbiddenComponent,

  },
  {
    path: 'not-found',
    component: RutaNotFoundComponent,

  },

  {
    path: 'not-found',
    component: RutaNotFoundComponent,

  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'

  },
  {
    path: '**',
    component: RutaNotFoundComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
