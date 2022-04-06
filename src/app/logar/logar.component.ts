import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-logar',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.css']
})
export class LogarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin();

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    window.scroll;
  }

  logar() {
    this.authService.logar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{
      this.usuarioLogin = resp

      environment.token = this.usuarioLogin.token;
      environment.nome = this.usuarioLogin.nome;
      environment.foto = this.usuarioLogin.foto;

      this.router.navigate(['/inicio'])
    }, erro =>{
      if(erro.status == 500 || erro.status == 401){
        alert("Usuário ou senha incorretos!")
      }
    })
  }

}
