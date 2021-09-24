import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.sass']
})
export class HomeAdminComponent implements OnInit {

  items: string[] = ['Funcionários', 'Cardápios', 'Pedidos', 'Produtos', 'Configurações'];
  desactives: string[] = ['Suporte', 'Análise', 'Delivery']

  constructor() { }

  ngOnInit(): void {
  }

}
