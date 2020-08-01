import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { Observable, EMPTY } from 'rxjs';

// Classe que pode ser injetada em outras classes
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Selecionando url do backend ou local para execação local
  baseUrl = window.location.href.includes('localhost') ? 'http://localhost:3001/products' : 'https://crud-angular-backend.herokuapp.com/products';

  // Injetando o snackbacr e o http client
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      // Configuração do sackbar
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
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
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((obj) => obj), //Tratamento de erro
      catchError(e => this.errorHandler(e))
    )
  }

  /**
   * Faz a leitura de toda a lista de produtos
   * 
   * @return um `Observable` com a lista de produtos em array
   */
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl).pipe(
      map((obj) => obj), //Tratamento de erro
      catchError(e => this.errorHandler(e))
    )
  }

  /**
   * Lê um produto através do ID do mesmo
   * 
   * @param id 
   * 
   * @return `Observable` de `Product`
   */
  readById(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(
      map((obj) => obj), //Tratamento de erro
      catchError(e => this.errorHandler(e))
    )
  }

  /**
   * Atualiza o registro de um produto com base em um ID de produto recebido
   * 
   * @param product 
   */
  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product).pipe(
      map((obj) => obj), //Tratamento de erro
      catchError(e => this.errorHandler(e))
    )
  }

  delete(id: number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url).pipe(
      map((obj) => obj), //Tratamento de erro
      catchError(e => this.errorHandler(e))
    )
  }

  errorHandler(e: any): Observable<any> {
    console.log(e)
    this.showMessage('Ocorreu um erro!', true)
    return EMPTY
  }


}
