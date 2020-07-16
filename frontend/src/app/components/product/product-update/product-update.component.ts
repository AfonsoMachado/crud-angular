import { Product } from './../product.model';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Capturando o parametro que tem como chave o id (definido nas rotas), rtecebido pela rota
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => {
      this.product = product
    });
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso')
      //Sai da tela e volta pra tela de produto
      this.router.navigate(["/products"])
    })
  }

  /**
   * Cancela a ação, retornando para a tela com a tabela dos produtos
   */
  cancel(): void {
    // Retorna para a tela com a tabela dos produtos
    this.router.navigate(['/products'])
  }

}
