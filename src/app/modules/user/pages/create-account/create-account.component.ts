import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.sass']
})
export class CreateAccountComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  navigate() {
    this.router.navigate(['user']);
  }


}
