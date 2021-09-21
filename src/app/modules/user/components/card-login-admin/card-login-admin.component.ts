import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-login-admin',
  templateUrl: './card-login-admin.component.html',
  styleUrls: ['./card-login-admin.component.sass']
})
export class CardLoginAdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigate(['user'])
  }

}
