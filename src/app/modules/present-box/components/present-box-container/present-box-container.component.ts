import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AppService} from "../../../../services/app.service";
import {PresentBoxService} from "../../services/present-box.service";

@Component({
  selector: 'app-present-box-container',
  templateUrl: './present-box-container.component.html',
  styleUrls: ['./present-box-container.component.css']
})
export class PresentBoxContainerComponent implements OnInit {

  constructor(private route: ActivatedRoute, private appService: AppService, public presentBoxService: PresentBoxService) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(
      boxes => (this.presentBoxService.presentBoxesArray = boxes.presentBoxesResolverService,

          setTimeout(() => this.appService.setRequestStatus(false))
      ),
      err => (
        setTimeout(() => this.appService.setRequestStatus(false)),
          alert(err.error.message))
    );
  }

}
