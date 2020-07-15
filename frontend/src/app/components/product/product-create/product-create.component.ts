import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from './../product.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {

  // Variavel alterada pelo input na inserção de dados no formulario
  product: Product = {
    name: '',
    price: null
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    // Subscribe notifica quando uma resposta chegar
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!')
      this.router.navigate(['/products'])
    })

    
  }

  /**
   * Ao clicar em cancelar, volta para a tela de produtos
   */
  cancel(): void {
    this.router.navigate(['/products'])
  }

}
