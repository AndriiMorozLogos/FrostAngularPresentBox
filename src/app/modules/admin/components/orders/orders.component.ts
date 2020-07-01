import {Component, OnInit} from '@angular/core';
import {OrdersModel} from "../../../main/models/Orders.model";
import {AppService} from "../../../../services/app.service";
import {ActivatedRoute} from "@angular/router";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: OrdersModel[] = [];
  status = [];

  constructor(public appService: AppService, private route: ActivatedRoute, private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(
      res => (
        res.ordersResolverService &&
        (this.orders = res.ordersResolverService),
          setTimeout(() => this.appService.setRequestStatus(false)
          ),
          err => (
            setTimeout(() => this.appService.setRequestStatus(false)),
              alert(err.error.message))
      ))
  }


  send(id: number) {
    let status = this.status;

    this.adminService.send(id, status[id]).subscribe(res => (
        alert('Success'),
          this.orders = this.orders.map(function (order) {
            if (order.id === id) {
              order.status = status[id];
            }
            return order;
          }),
          this.appService.setRequestStatus(false)
      ),
      err => (
        this.appService.setRequestStatus(false),
          alert(err.error.message))
    )
  }
}
