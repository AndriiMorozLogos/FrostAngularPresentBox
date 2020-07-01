import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {UserModel} from "../../modules/user/models/User.model";
import {AppService} from "../app.service";

@Injectable()
export class UserResolverService implements Resolve<UserModel> {
  constructor(private appService: AppService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserModel> {
    const userId = localStorage.getItem('user_id');

    return this.appService.getUserByID(+userId);
  }
}
