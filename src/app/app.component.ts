import { AfterViewChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent  {
  title = 'angular-restaurante';

  session: any = localStorage.getItem('token');

  constructor() {}

  ngDoCheck() {
    this.session = localStorage.getItem('token');
  
  }


}
