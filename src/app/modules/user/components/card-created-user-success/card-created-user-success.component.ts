import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-created-user-success',
  templateUrl: './card-created-user-success.component.html',
  styleUrls: ['./card-created-user-success.component.sass']
})
export class CardCreatedUserSuccessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigate(['user/login']);
  }

}
