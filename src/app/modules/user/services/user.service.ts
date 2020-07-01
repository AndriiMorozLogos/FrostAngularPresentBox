import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserModel} from "../models/User.model";
import {AppService} from "../../../services/app.service";
import {Router} from "@angular/router";
import {OrdersModel} from "../../main/models/Orders.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  updateStatus = false;

  constructor(private http: HttpClient, private appService: AppService, private route: Router) {
  }

  public getAdmins(): Observable<UserModel[]> {
    this.appService.setRequestStatus(true);
    return this.http.get<UserModel[]>(`http://localhost:3333/api/user/allAdmin`)
  }

  public updateUser(user: UserModel) {
    this.appService.setRequestStatus(true);
    this.http.put <UserModel>(`http://localhost:3333/api/user/update`, {...this.appService.user, ...user})
      .subscribe(res => (
          this.appService.setUser(res),
            this.appService.setRequestStatus(false),
            window.location.reload()
        ),
        err => (
          this.appService.setRequestStatus(false),
            alert(err.error.message))
      )
  }

  public deleteUser() {
    this.appService.setRequestStatus(true);
    const id = this.appService.user.id;
    this.http.delete(`http://localhost:3333/api/user/delete/account?userId=${id}`)
      .subscribe(res => (
          alert('Success!!'),
            this.appService.setUserIn(false),
            localStorage.removeItem('user_id'),
            localStorage.removeItem('access_token'),
            window.location.reload()
        ),
        err => (
          this.appService.setRequestStatus(false),
            alert(err.error.message))
      )
  }

  public getOrders(userId: number): Observable<OrdersModel[]> {

    return this.http.get<OrdersModel[]>(`http://localhost:3333/api/present/order/buyer?userId=${userId}`)
  }

  deleteOrder(id: number) {
    this.appService.setRequestStatus(true);
    return this.http.delete(`http://localhost:3333/api/present/order/buyer/${id}`);
  }
}
