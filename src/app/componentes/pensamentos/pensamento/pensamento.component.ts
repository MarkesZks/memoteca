import { Component, Input } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {

  @Input() pensameto: Pensamento={
    id: 0,
    conteudo: "I love Angular",
    autoria: 'Gabriel Marques',
    modelo: 'modelo2'
  }
  ngOnInit(): void{}

  larguraPensamento():string{
    if(this.pensameto.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }
}
