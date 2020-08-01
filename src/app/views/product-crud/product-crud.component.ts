import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  // No momento da instancia do componente, o router é passado pelo angular, e pode ser usado dentro de navigateToProductCreate()
  constructor(private router: Router, private headerService: HeaderService) { 
    // Alterando o cabeçalho atual
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    // Navegando para outra tela no clique do botão
    this.router.navigate(['/products/create'])
  }

}
