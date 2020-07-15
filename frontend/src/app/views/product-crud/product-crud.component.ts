import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  // No momento da instancia do componente, o router é passado pelo angular, e pode ser usado dentro de navigateToProductCreate()
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    // Navegando para outra tela no clique do botão
    this.router.navigate(['/products/create'])
  }

}
