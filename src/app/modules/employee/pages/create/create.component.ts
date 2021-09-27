import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { EmployeeService } from '../../shared/employee.service';
import { IEmployee } from '../../shared/types/employee';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {

  form: FormGroup;

  loading: boolean = false;

  employee: IEmployee;

  constructor(private fb: FormBuilder, private notifierService: NotifierService, private employeesService: EmployeeService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      cpf: ['', Validators.required],
      pix: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  validateForm() {
    if(this.form.invalid) {
      this.notifierService.notify('warning', 'Formulário Inválido!')
    } else {
      this.prepareToSubmit();
      this.submit();
    }
  }

  prepareToSubmit() {
    this.employee = {
      name: this.form.controls.name.value,
      phone: this.form.controls.phone.value,
      cpf: this.form.controls.cpf.value,
      pix: this.form.controls.pix.value,
      password: this.form.controls.password.value
    };
  }

  submit() {
    this.loading = true;
    this.employeesService.create(this.employee)
      .subscribe((data: any) => {
        this.notifierService.notify('success', 'Funcionário cadastrado com sucesso');
      }).add(() => {
        this.loading = false;
      });
  }


}
