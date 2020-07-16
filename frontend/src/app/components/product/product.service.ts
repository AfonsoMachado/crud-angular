import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable } from 'rxjs';

// Classe que pode ser injetada em outras classes
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3001/products'

  // Injetando o snackbacr e o http client
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      // Configuração do sackbar
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  /**
   * Cadastrando um produto no através de uma requisição http do tipo POST
   * 
   * @param {Product} product Produto a ser cadastrado
   * 
   * @return um `Observable` de `Product`
   */
  create(product: Product): Observable<Product> {
    // Mandando uma requisição http post para a url, enviando uma nova instancia de produto
    return this.http.post<Product>(this.baseUrl, product)
  }

  /**
   * Faz a leitura de toda a lista de produtos
   * 
   * @return um `Observable` com a lista de produtos em array
   */
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl)
  }
}
