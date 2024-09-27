import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css'
})
export class EditarPensamentoComponent {

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route:ActivatedRoute
  ){}
  pensamento: Pensamento = {
    id:0,
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }
  ngOnInit():void{
    const id= this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento)=>{
      this.pensamento = pensamento
    })
  }
  editarPensamento(){
    this.service.editarPensamento(this.pensamento).subscribe(()=>{
      this.router.navigate(['/listarPensamento'])
    })

  }
  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }
}
