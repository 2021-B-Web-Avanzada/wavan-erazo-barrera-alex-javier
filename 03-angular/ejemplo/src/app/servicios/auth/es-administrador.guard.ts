import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {AuthService} from "./auth.service";
@Injectable()
export class EsAdministradorGuard implements CanActivate{
  constructor(
    private readonly _authService: AuthService,
    private readonly _router: Router,
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const esAdministrador = this._authService.roles.some((permiso)=>permiso === 'admin')
    if(!esAdministrador){
      // console.log('llegando,,,,')
      this._router.navigate(['/forbidden']) // Se inyecta la dependencia
    }
    // console.log('llegando,3,,,')
    return esAdministrador;

  }

}
