import {Component, OnInit} from '@angular/core';
import {UserModel} from "../../../user/models/User.model";
import {AppService} from "../../../../services/app.service";
import {ActivatedRoute} from "@angular/router";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: UserModel[] = [];

  constructor(public appService: AppService, private route: ActivatedRoute, private adminService: AdminService) {
  }

  ngOnInit(): void {
    const user_id = localStorage.getItem('user_id');
    this.route.data.subscribe(
      res => (
        res.usersResolverService &&
        (this.users = res.usersResolverService),

        res.buyersResolverService &&
        (this.users = res.buyersResolverService),

          this.users = this.users.filter(user => user.id != +user_id),

          setTimeout(() => this.appService.setRequestStatus(false)
          ),
          err => (
            setTimeout(() => this.appService.setRequestStatus(false)),
              alert(err.error.message))
      ))
  }

  updateUserStatus(role: string, id: number) {
    this.adminService.updateUserStatus(role, id)
      .subscribe(res => {
          alert('Successes');
          this.appService.setRequestStatus(false);
          window.location.reload()
        },
        error => {
          alert(error.error.message);
          this.appService.setRequestStatus(false);
        });
  }
}

