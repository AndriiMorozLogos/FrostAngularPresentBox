import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from "rxjs";
import {UserModel} from "../modules/user/models/User.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  userIn = false;
  userId: number;
  user: UserModel;
  requestStatus = false;

  constructor(private http: HttpClient, private route: Router) {
  }

  public getUserByID(id: number) {

    return this.http.get<UserModel>(`http://localhost:3333/api/user/getInfo?userId=${id}`)
  }


  setRequestStatus(value) {
    this.requestStatus = value;
  }

  setUserIn(value: boolean) {
    this.userIn = value;
  }

  setUserId(userId: number) {
    this.userId = userId;
  }

  public setUser(value: UserModel) {
    this.user = value
  }

  navigate(value: string) {
    this.route.navigate([value])
  }
}
