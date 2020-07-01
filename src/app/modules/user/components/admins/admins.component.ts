import { Component, OnInit } from '@angular/core';
import {AppService} from "../../../../services/app.service";
import {ActivatedRoute} from "@angular/router";
import {UserModel} from "../../models/User.model";

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {

  admins: UserModel[] = [];

  constructor(public appService: AppService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      admins => (
        admins.adminsResolverService &&
        (this.admins = admins.adminsResolverService,
          setTimeout(() => this.appService.setRequestStatus(false)))
      ),
      err => (
        setTimeout(() => this.appService.setRequestStatus(false)),
          alert(err.error.message))
    );
  }

}
