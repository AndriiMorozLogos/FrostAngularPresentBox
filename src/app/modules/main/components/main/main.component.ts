import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../../services/app.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public appService: AppService, public router: Router, public route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const user_id = localStorage.getItem('user_id');
    if (+user_id) {
      this.appService.getUserByID(+user_id)
        .subscribe(res => (
          this.appService.user = res,
            this.appService.userId = res.id,
            this.appService.userIn = true,
            err => (
              alert(err.error.message))
        ))
      ;
    }
  }

  navigate(value) {
    this.router.navigate([value])
  }
}
