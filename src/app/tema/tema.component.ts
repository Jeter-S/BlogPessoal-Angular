import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema;
  listaTema: Tema[];
  constructor(
    private temaSevice: TemaService,
    private router: Router,
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      alert("Sua seção expirou faça login novamente")
      this.router.navigate(['/logar'])
    }

    this.findAllTema();
  }

  cadastrar() {
    this.temaSevice.postTema(this.tema).subscribe((resp: Tema)=>{
      this.tema = resp;
      alert("Tema cadastrado com sucesso!")
      this.findAllTema();
      this.tema = new Tema;
    })
  }

  findAllTema() {
    this.temaSevice.getAllTema().subscribe((resp: Tema[])=> {
      this.listaTema = resp;
    })
  }
}
