import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AppService} from "../../../services/app.service";
import {PresentBoxModel} from "../models/PresentBox.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PresentBoxService {

  presentBoxesArray: PresentBoxModel[] = [];

  constructor(private http: HttpClient, private appService: AppService) {
  }

  getAllBoxes(): Observable<PresentBoxModel[]> {
    this.appService.setRequestStatus(true);

    return this.http.get<PresentBoxModel[]>('http://localhost:3333/api/present/box/listAll');
  }

  updateBox(id: number, updatedBox: PresentBoxModel) {
    this.appService.setRequestStatus(true);

    return this.http.put<PresentBoxModel>(`http://localhost:3333/api/present/box/${id}`, {...updatedBox});
  }

  deleteBox(id: number) {
    this.appService.setRequestStatus(true);
    this.http.delete(`http://localhost:3333/api/present/box/${id}`)
      .subscribe(res => (
          this.presentBoxesArray = this.presentBoxesArray.filter(box => box.id !== id),
            this.appService.setRequestStatus(false)
        ),
        err => (
          this.appService.setRequestStatus(false),
            alert(err.error.message))
      )
    ;
  }

  buyBox(id: any) {
    this.appService.setRequestStatus(true);

    this.http.post(`http://localhost:3333/api/present/order/buyer?presentBoxId=${id}`, {presentBoxId: id})
      .subscribe(res => (
          alert('Success!!'),
            this.appService.setRequestStatus(false)
        ),
        err => (
          this.appService.setRequestStatus(false),
            alert(err.error.message))
      )
  }

  getBox(id: string) {
    this.appService.setRequestStatus(true);

    return this.http.get<PresentBoxModel>(`http://localhost:3333/api/present/box/getOne/${id}`);
  }
}
