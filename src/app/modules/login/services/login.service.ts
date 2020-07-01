import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppService} from '../../../services/app.service';
import {UserLoginModel} from '../models/UserLogin.model';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'http://localhost:3333/api/auth/login';

  constructor(private http: HttpClient, private appService: AppService, private router: Router) {
  }

  postRequestForLogin(User: UserLoginModel) {
    this.http.post<any>(this.loginUrl, {...User})
      .subscribe(
        message => {
          localStorage.setItem('access_token', message.accessToken);
          localStorage.setItem('user_id', message.user_id);

          this.router.navigate(['/']);
          this.appService.setUserIn(true);

          if (!this.appService.user) {
            this.appService.getUserByID(+message.user_id)
              .subscribe(res => (
                this.appService.user = res,
                  err => (
                    alert(err.error.message))
              ));
            this.appService.setUserId(+message.user_id);
            this.appService.userIn = true;
          }

        },
        error => {
          alert(error.error.message);
          this.appService.setRequestStatus(false);
        }
      );
  }


  public getToken(): string {
    return localStorage.getItem('access_token');
  }

}


