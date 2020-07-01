import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginService} from "./modules/login/services/login.service";

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(public login: LoginService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.login.getToken()}`
      }
    });

    return next.handle(request);
  }

}

