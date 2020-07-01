import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {PresentBoxModel} from "../../models/PresentBox.model";
import {PresentBoxService} from "../present-box.service";

@Injectable()
export class PresentBoxesResolverService implements Resolve<PresentBoxModel[]> {
  constructor(private presentBoxService: PresentBoxService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PresentBoxModel[]> {
    return this.presentBoxService.getAllBoxes();
  }
}
