import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {UserService} from "../user.service";
import {UserModel} from "../../models/User.model";
import {AppService} from "../../../../services/app.service";

@Injectable()
export class UserResolverService implements Resolve<UserModel> {
  constructor(private appService: AppService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserModel> {
    const user_id = localStorage.getItem('user_id');

    return this.appService.getUserByID(+user_id);
  }
}
