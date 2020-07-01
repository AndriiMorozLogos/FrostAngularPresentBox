import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../models/User.model';
import {AppService} from '../../../services/app.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient, private appService: AppService) {
  }


  postRequestForRegistration(User: UserModel) {
    this.appService.setRequestStatus(true);
    return this.http.post<any>(' http://localhost:3333/api/auth/register', {...User})
      .subscribe(res => {
          alert('Successes');
          this.appService.setRequestStatus(false);
        },
        error => {
          alert(error.error.message);
          this.appService.setRequestStatus(false);
        });
  }

}
