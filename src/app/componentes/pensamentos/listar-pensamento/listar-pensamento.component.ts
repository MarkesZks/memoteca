import { Component, input } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent {
   listapensamentos = [
    {
    conteudo: "Comunicação entre componentes",
    autoria: 'Gabriel Marques',
    modelo: 'modelo2'
  },
    {
    conteudo: "Comunicação entre componentes",
    autoria: 'Gabriel Marques',
    modelo: 'modelo2'
  },
  {
    conteudo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ",
    autoria: 'Gabriel Marques',
    modelo: 'modelo2'
  }
]
}
