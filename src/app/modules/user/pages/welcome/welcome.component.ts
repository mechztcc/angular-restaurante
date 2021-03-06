import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {

  chapter: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  navigate() {
    this.chapter = 1;
  }

  changeChapter(chapter: any) {
    this.chapter = chapter;
  }

}
