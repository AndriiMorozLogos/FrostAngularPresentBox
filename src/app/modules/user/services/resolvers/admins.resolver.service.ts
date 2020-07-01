import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {UserService} from "../user.service";
import {UserModel} from "../../models/User.model";

@Injectable()
export class AdminsResolverService implements Resolve<UserModel[]> {
  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserModel[]> {

    return this.userService.getAdmins();
  }
}
