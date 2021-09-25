import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit, OnChanges {

  session: boolean = false;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    
  }     
  ngOnInit(): void {
    
  }

}
