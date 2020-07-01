import {Component, OnInit} from '@angular/core';
import {AppService} from "../../../../services/app.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {OrdersModel} from "../../../main/models/Orders.model";
import {ActivatedRoute} from "@angular/router";
import {or} from "@rxweb/reactive-form-validators";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public updateUserForma: FormGroup;

  constructor(private formBuilder: FormBuilder, public appService: AppService,
              public userService: UserService, private route: ActivatedRoute) {

    this.route.data.subscribe(
      res => (
        res.userResolverService &&
        (this.appService.user = res.userResolverService),
          setTimeout(() => this.appService.setRequestStatus(false)
          ),
          err => (
            setTimeout(() => this.appService.setRequestStatus(false)),
              alert(err.error.message))
      ))

    this.updateUserForma = formBuilder.group({
      firstName: [this.appService.user.firstName, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
      lastName: [this.appService.user.lastName, [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
      email: [this.appService.user.email, [Validators.required, Validators.email]],
      phoneNumber: [this.appService.user.phoneNumber, [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(8)]]
    });
  }


  ngOnInit(): void {

  }

  deleteOrder(id: number) {
    this.userService.deleteOrder(id)
      .subscribe(res => (
          this.appService.user.orders = this.appService.user.orders.filter(order => order.id != id),
            this.appService.setRequestStatus(false)
        ),
        err => (
          this.appService.setRequestStatus(false),
            alert(err.error.message))
      )
  }

  updateUser() {
    this.userService.updateUser(this.updateUserForma.value);
  }

  setUpdateStatus(value) {
    this.userService.updateStatus = value;
  }
}
