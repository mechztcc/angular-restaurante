import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { SessionsService } from '../../shared/sessions.service';
import { IUser } from '../../shared/types/user';

@Component({
  selector: 'app-card-login-admin',
  templateUrl: './card-login-admin.component.html',
  styleUrls: ['./card-login-admin.component.sass']
})
export class CardLoginAdminComponent implements OnInit {

  form: FormGroup;
  user: IUser;

  loading: boolean = false;

  constructor(private router: Router, private fb: FormBuilder, private notifierService: NotifierService, private sessionsService: SessionsService) { }

  ngOnInit(): void {
    this.initForm(); 
  }

  initForm() {
    this.form = this.fb.group({
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      password: ['', Validators.required]
    });
  }

  validateForm() {
    if(this.form.invalid) {
      this.notifierService.notify('error', 'Campos Inválidos');
    } else {
      this.prepareToSubmit();
      this.submit();
    }
  }

  prepareToSubmit() {
    this.user = {
      email: this.form.controls.email.value,
      password: this.form.controls.password.value
    };
  }

  submit() {
    console.log(this.user);
    
    this.loading = true;
    this.sessionsService.createSession(this.user)
      .subscribe((data: IUser) => {
        this.notifierService.notify('success', 'Bem-vindo');
        if(data.token) {
          localStorage.setItem('token', data.token);
        }
      }).add(() => {
        this.loading = false;
        // this.router.navigate([''])
      })
  }

  navigate() {
    this.router.navigate(['user']);
  }

  navigateToCreateAccount() {
    this.router.navigate(['user/create-account']);
  }

}
