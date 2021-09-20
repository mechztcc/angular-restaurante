import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-welcome',
  templateUrl: './card-welcome.component.html',
  styleUrls: ['./card-welcome.component.sass']
})
export class CardWelcomeComponent implements OnInit {

  @Output() return: EventEmitter<number> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  changeChapter(e: any) {
    this.return.emit(e);
  }

}
