import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PresentBoxService} from "../../services/present-box.service";
import {AppService} from "../../../../services/app.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PresentBoxResolverService} from "../../services/resolver/presentBox.resolver.service";

@Component({
  selector: 'app-present-box-preview',
  templateUrl: './present-box-preview.component.html',
  styleUrls: ['./present-box-preview.component.css']
})
export class PresentBoxPreviewComponent implements OnInit {

  statusUpdateForma = false;

  @Input() box;
  public updateForma: FormGroup;

  constructor(private formBuilder: FormBuilder, private presentBoxService: PresentBoxService,
              public appService: AppService, private router: Router,
              private route: ActivatedRoute) {
    this.updateForma = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
      description: ['', [Validators.required, Validators.maxLength(1000)]],
      priceInUah: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(1)]],
      isAvailable: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.data.subscribe(
      box => (
        box.presentBoxResolverService &&
        (this.box = box.presentBoxResolverService,
          setTimeout(() => this.appService.setRequestStatus(false)))
      ),
      err => (
        setTimeout(() => this.appService.setRequestStatus(false)),
          alert(err.error.message))
    );
  }

  setUpdateStatus(value) {
    this.statusUpdateForma = value;
  }

  updateBox() {
    this.presentBoxService.updateBox(this.box.id, this.updateForma.value)
      .subscribe(res => (
          this.box = res,
            alert('Success'),
            this.appService.setRequestStatus(false)),
        err => (
          this.appService.setRequestStatus(false),
            alert(err.error.message))
      );
  }

  deleteBox() {
    this.presentBoxService.deleteBox(this.box.id)
  }

  buyPresentBox() {
    this.presentBoxService.buyBox(this.box.id)
  }

  navigate() {
    this.router.navigate(['/box/' + this.box.id])
  }
}
