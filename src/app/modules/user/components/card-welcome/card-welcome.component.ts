import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-welcome',
  templateUrl: './card-welcome.component.html',
  styleUrls: ['./card-welcome.component.sass']
})
export class CardWelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  navigate() {
    // this.router.navigate(['user'])
  }

}
