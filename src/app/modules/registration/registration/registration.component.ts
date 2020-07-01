import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegistrationService} from '../services/registration.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registrationForma: FormGroup;

  constructor(private formBuilder: FormBuilder, public registrationService: RegistrationService,
              private router: Router) {
    this.registrationForma = formBuilder.group({
      password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(300)]],
      surname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(300)]],
      phoneNumber: ['', [Validators.required]],
      duplicate_password: ['', [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    });
  }

  ngOnInit(): void {
  }

  postDataForRegistration() {
    this.registrationService.postRequestForRegistration(this.registrationForma.value);
    this.registrationForma.reset();
  }

  navigate() {
    this.router.navigate(['/forgot']);
  }

}
