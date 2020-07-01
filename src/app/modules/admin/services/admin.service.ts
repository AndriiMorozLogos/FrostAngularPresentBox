import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppService} from "../../../services/app.service";
import {Observable} from "rxjs";
import {UserModel} from "../../user/models/User.model";
import {OrdersModel} from "../../main/models/Orders.model";
import {PresentBoxModel} from "../../present-box/models/PresentBox.model";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private appService: AppService) {
  }

  public getUsers(): Observable<UserModel[]> {

    return this.http.get<UserModel[]>(`http://localhost:3333/api/user/listAll`)
  }

  public getBuyers(): Observable<UserModel[]> {

    return this.http.get<UserModel[]>(`http://localhost:3333/api/user/allBuyer`)
  }

  public getOrders(): Observable<OrdersModel[]> {

    return this.http.get<OrdersModel[]>(`http://localhost:3333/api/present/order/admin`)
  }

  public send(id: number, status: string) {

    return this.http.put(`http://localhost:3333/api/present/order/admin/${id}?orderStatus=${status}`,{})
  }

  post(box: PresentBoxModel) {
    this.appService.setRequestStatus(true);
    return this.http.post<any>(`http://localhost:3333/api/present/box?userId=${this.appService.user.id}`, {...box})
      .subscribe(res => {
          alert('Successes');
          this.appService.setRequestStatus(false);
        },
        error => {
          alert(error.error.message);
          this.appService.setRequestStatus(false);
        });
  }

  updateUserStatus(role: string, id: number) {
    this.appService.setRequestStatus(true);
    return this.http.put<any>(`http://localhost:3333/api/user/update/role/${id}?role=${role}`,{})
  }

}
