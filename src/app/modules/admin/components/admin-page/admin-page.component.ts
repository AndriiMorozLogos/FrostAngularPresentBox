import { Component, OnInit } from '@angular/core';
import {AppService} from "../../../../services/app.service";
import {UserModel} from "../../../user/models/User.model";

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  users: UserModel[] = [];

  constructor(public appService: AppService) { }

  ngOnInit(): void {
  }

}
