import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {UserModel} from "../../../user/models/User.model";
import {AdminService} from "../admin.service";
import {OrdersModel} from "../../../main/models/Orders.model";

@Injectable()
export class OrdersResolverService implements Resolve<OrdersModel[]> {
  constructor(private adminService: AdminService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<OrdersModel[]> {

    return this.adminService.getOrders();
  }
}
