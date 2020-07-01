import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {PresentBoxModel} from "../../models/PresentBox.model";
import {PresentBoxService} from "../present-box.service";

@Injectable()
export class PresentBoxResolverService implements Resolve<PresentBoxModel> {
  constructor(private presentBoxService: PresentBoxService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PresentBoxModel> {
    const id: string = route.paramMap.get('id');

    return this.presentBoxService.getBox(id);
  }
}
