import {Component} from '@angular/core';
import {AppService} from '../../services/app.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public appService: AppService, public router: Router, public route: ActivatedRoute) {
  }

  goOut() {
    window.location.reload();
    this.appService.setUserIn(false);
    localStorage.removeItem('user_id');
    localStorage.removeItem('access_token');
  }

  navigate(value) {
    this.router.navigate([value])
  }
}
