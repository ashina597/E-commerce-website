import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface componentDeactivate{
  canDeactivate: () => boolean | Observable<boolean> | Promise<boolean>
}
export class CandeactivateService implements CanDeactivate<componentDeactivate> {

  constructor() { }
  canDeactivate(
    component: componentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot | undefined): boolean | Observable<boolean> | Promise<boolean > {
    return component.canDeactivate()
  }
}
