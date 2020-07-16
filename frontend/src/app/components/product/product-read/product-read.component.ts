import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id', 'name', 'price']

  // Injetando o ProductService para poder acessar o método que realiza a leitura dos produtos
  constructor(private productService: ProductService) { }

  // Método que é chamado assim que o componente product-read é inicializado
  ngOnInit(): void {
    // realizando a leitra da lista de produtos do servidor
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }

}
