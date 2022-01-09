import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
@Injectable()
export class EstaLogeadoGuard implements CanActivate{

  //Inyeccion de depnedencias
  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router,
  ){

  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this._authService.estaLogeado){
      this._router.navigate(['/forbidden']) // Se inyecta la dependencia
    }
    return this._authService.estaLogeado; //boolean
  }


}
