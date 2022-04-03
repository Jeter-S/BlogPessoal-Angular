import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario;
  confirmarSenha: string;
  tipoDoUsuario: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  //faz com que algo a conteça quando a pagina inicia.
  ngOnInit() {
    window.scroll(0,0);
  }

  confirmeSenha(event: any) {
    this.confirmarSenha = event.target.value;
  }

  tipoUsuario(event: any) {
    this.tipoDoUsuario = event.target.value;
  }

  cadastrar() {
   this.usuario.tipo = this.tipoDoUsuario;

    if(this.usuario.senha != this.confirmarSenha){
      alert("As senhas não são iguais!")
    } else{
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        this.router.navigate(['/logar'])
        alert("Usuário cadastrado com Sucesso!")
      }) 
    }
  }

}
