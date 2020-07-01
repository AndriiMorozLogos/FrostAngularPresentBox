import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PresentBoxService} from "../../../present-box/services/present-box.service";
import {AppService} from "../../../../services/app.service";
import {ActivatedRoute, Router} from "@angular/router";
import {RxwebValidators} from "@rxweb/reactive-form-validators";
import * as firebase from "firebase";
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-create-present-box',
  templateUrl: './create-present-box.component.html',
  styleUrls: ['./create-present-box.component.css']
})
export class CreatePresentBoxComponent implements OnInit {

  file = null;
  metaData = null;
  storageRef = null;

  uploadTask: firebase.storage.UploadTask;

  public createPresentBoxForma: FormGroup;

  constructor(private formBuilder: FormBuilder, private presentBoxService: PresentBoxService,
              public appService: AppService, private router: Router,
              public adminService: AdminService) {
    this.createPresentBoxForma = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(35)]],
      description: ['', [Validators.required, Validators.maxLength(1000)]],
      priceInUah: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(1)]],
      isAvailable: ['', Validators.required],
      file: ['', [Validators.required, RxwebValidators.extension({extensions: ['jpg', 'img']})]]
    });
  }

  ngOnInit(): void {
  }

  onFileSelected(event) {
    this.file = event.target.files[0];
    this.metaData = {contentType: this.file.type};
  }

  createBox() {
    this.appService.setRequestStatus(true);

    this.storageRef = firebase.storage().ref().child(`morozProject/photos/${this.createPresentBoxForma.value.name}`);
    this.uploadTask = this.storageRef.put(this.file, this.metaData);
    this.uploadTask.then((uploadSnapshot: firebase.storage.UploadTaskSnapshot) => {
      uploadSnapshot.ref.getDownloadURL()
        .then(imageURL => {
          let obj = {
            name: this.createPresentBoxForma.value.name,
            description: this.createPresentBoxForma.value.name,
            priceInUah: this.createPresentBoxForma.value.priceInUah,
            isAvailable: this.createPresentBoxForma.value.isAvailable,
            photoUrl: imageURL
          };
          this.adminService.post(
            {...obj}
          )
        });
    });
  }
}
