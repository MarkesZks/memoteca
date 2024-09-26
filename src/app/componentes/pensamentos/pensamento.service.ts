import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = "http://localhost:3000/pensamentos"


  constructor(private http: HttpClient) { }
  listar():Observable<Pensamento[]>{
    //Chama o método get do HttpClient para fazer uma requisição HTTP GET para a URL this.API.
    return this.http.get<Pensamento[]>(this.API)
  }
  criar(pensamento:Pensamento):Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API,pensamento)

  }

}
