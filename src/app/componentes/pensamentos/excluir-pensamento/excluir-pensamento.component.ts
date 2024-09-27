import { PensamentoService } from './../pensamento.service';

import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrl: './excluir-pensamento.component.css'
})
export class ExcluirPensamentoComponent implements OnInit{

  pensamento:Pensamento = {
    id:0,
    conteudo:'',
    autoria:'',
    modelo:''
  }
  constructor(
    private service:PensamentoService,
    private router:Router,
    private route:ActivatedRoute
  ){ }

  ngOnInit(): void {
    //pega o valor do ID do pensamento que está sendo passado na URL da rota
    const id = this.route.snapshot.paramMap.get('id')
    //O operador ! é usado para afirmar que o valor de id não é nulo.
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento)=>{
      this.pensamento=pensamento
    })
  }
  excluirPensamento(){
    // Verifica se o pensamento tem um ID válido
    if(this.pensamento.id){
       // Exclui o pensamento do banco de dados
      this.service.excluir(this.pensamento.id).subscribe(()=>{
        // Redireciona o usuário para a página de listagem de pensamentos
        this.router.navigate(['/listarPensamento'])
      })
    }
  }
  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

}
