import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-selection-login',
  templateUrl: './card-selection-login.component.html',
  styleUrls: ['./card-selection-login.component.sass']
})
export class CardSelectionLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(v: number) {
    if(v == 1) {
      this.router.navigate(['user/login']);
    } else {
      this.router.navigate(['user/login/employee']);
    }
  }

}
