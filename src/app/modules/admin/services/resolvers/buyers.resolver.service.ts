import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {UserModel} from "../../../user/models/User.model";
import {AdminService} from "../admin.service";

@Injectable()
export class BuyersResolverService implements Resolve<UserModel[]> {
  constructor(private adminService: AdminService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserModel[]> {

    return this.adminService.getBuyers();
  }
}
