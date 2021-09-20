import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {

  chapter: number = 2;

  constructor() { }

  ngOnInit(): void {
  }

  navigate() {
    this.chapter = 1;
  }

}
