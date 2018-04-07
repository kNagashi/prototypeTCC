import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;
  showAlert: boolean;

  constructor(private router: Router) {
    this.showAlert = false;
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls(): void {
    this.email = new FormControl('', {
      validators: Validators.required,
      updateOn: 'blur'
    });
    this.password = new FormControl('', {
      validators: Validators.required,
      updateOn: 'blur'
    });
  }

  createForm(): void {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  private dirtyForm(form: FormGroup) {
    Object.keys(form.controls).forEach(key => {
      const control = form.controls[key];
      if (control instanceof FormGroup) {
        return this.dirtyForm(control);
      }

      control.markAsDirty();
    });
  }

  loginSubmit() {
    const self = this;
    this.dirtyForm(this.loginForm);

    if (this.loginForm.valid) {
      if (this.email.value === 'teste@teste.com') {
        console.log('Success Email');
        self.router.navigate(['/dashboard']);
      }
    }
  }

}
