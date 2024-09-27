import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  // Define a URL da API
  private readonly API = "http://localhost:3000/pensamentos"

// Construtor do serviço
  constructor(private http: HttpClient) { }

  //Metodo de Listar Pensamentos
  listar():Observable<Pensamento[]>{
    //Chama o método get do HttpClient para fazer uma requisição HTTP GET para a URL this.API. em uma lista de Pensamentos
    return this.http.get<Pensamento[]>(this.API)
  }
  //Metodo Criar um novo pensamento
  criar(pensamento:Pensamento):Observable<Pensamento> {
    // Chama o método post do HttpClient para fazer uma requisição HTTP POST para a URL this.API, enviando o pensamento como corpo da requisição.
    return this.http.post<Pensamento>(this.API,pensamento)
  }
  //Metodo Exclui um pensamento
  excluir(id:number):Observable<Pensamento>{
    // Cria a URL para a requisição DELETE, direcionando o ID do pensamento.
    const url = `${this.API}/${id}`
    // Chama o método delete do HttpClient para fazer uma requisição HTTP DELETE para a URL criada.
    return this.http.delete<Pensamento>(url)
  }
  //Metodo Buscar Por ID
  buscarPorId(id:number):Observable<Pensamento>{
     // Cria a URL para a requisição GET, incluindo o ID do pensamento.
     const url =`${this.API}/${id}`
     // Chama o método get do HttpClient para fazer uma requisição HTTP GET para a URL criada.
     return this.http.get<Pensamento>(url);

  }

}
