import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class RightsGuard implements CanActivate {

  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    const expectedRights = route.data.rights;
    // simulation du cookie qui contient les droits
    // pour une réelle authentification il faut mettre en place
    // un server d'authentification ou bien avoir un JWT
    let userRights: Array<String> = ['ADMINISTRATOR'];
    //let userRights: Array<String> = ['GUEST'];
    let permitted = false;

    for (let expectedRight of expectedRights) {
      if (userRights.includes(expectedRight)) {
        permitted = true;
      }
    }
    if (!permitted) {
      this.router.navigate(['']);
      return false;
    } else {
      return true;
    }
  }
}
