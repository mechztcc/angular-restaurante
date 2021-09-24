import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { IUser } from '../../shared/types/user';
import { UsersService } from '../../shared/users.service';

@Component({
  selector: 'app-card-create-account',
  templateUrl: './card-create-account.component.html',
  styleUrls: ['./card-create-account.component.sass']
})
export class CardCreateAccountComponent implements OnInit {

  form: FormGroup;
  user: IUser;

  loading: boolean = false;

  constructor(private fb: FormBuilder, private usersService: UsersService, private notifierService: NotifierService, private router: Router) { 
  }
  
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([
        Validators.required, Validators.email
      ])],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    });
  }


  validateForm() {
    if(this.form.invalid) {
      this.notifierService.notify('error', 'Formulario invalido');
    }
    if(this.form.controls.password.value != this.form.controls.repeatPassword.value) {
      this.notifierService.notify('warning', 'Senhas divergentes');
    } else {
      this.prepareToSubmit();
      this.submit();
    }
    
  }

  prepareToSubmit() {
    this.user = {
      name: this.form.controls.name.value,
      email: this.form.controls.email.value,
      password: this.form.controls.password.value,
    }
    console.log(this.user);
    
  }

  submit() {
    this.loading = true;
    this.usersService.createUser(this.user)
      .subscribe((user: IUser) => {
        this.notifierService.notify('success', 'Usuário criado');
      }).add(() => {
        this.loading = false;
        this.form.reset();
        this.router.navigate(['user/created']);
      })
  }


}
