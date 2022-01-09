import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { RutaForbiddenComponent } from './rutas/ruta-forbidden/ruta-forbidden.component';
import { RutaNotFoundComponent } from './rutas/ruta-not-found/ruta-not-found.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaUsuarioComponent } from './rutas/ruta-usuario/ruta-usuario.component';
import { RutaInicioComponent } from './rutas/ruta-inicio/ruta-inicio.component';
import { RutaPostComponent } from './rutas/ruta-post/ruta-post.component';
import { RutaAppComponent } from './rutas/ruta-app/ruta-app.component';
import {EstaLogeadoGuard} from "./servicios/auth/esta-logeado.guard";
import {AuthService} from "./servicios/auth/auth.service";
import {EsAdministradorGuard} from "./servicios/auth/es-administrador.guard";
import {BannerImagenesModule} from "./componentes/banner-imagenes/banner-imagenes.module";

@NgModule({
  declarations: [ //Componentes
    AppComponent,
    RutaForbiddenComponent,
    RutaNotFoundComponent,
    RutaLoginComponent,
    RutaUsuarioComponent,
    RutaInicioComponent,
    RutaPostComponent,
    RutaAppComponent
=======
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent
>>>>>>> desarrollo
  ],
  imports: [ //Modulos
    BrowserModule,
    AppRoutingModule,
    BannerImagenesModule
  ],
  providers: [ //Servicios
    AuthService,
    EstaLogeadoGuard,
    EsAdministradorGuard
  ],
  bootstrap: [ //Componente principal
    AppComponent]
})
export class AppModule { }
