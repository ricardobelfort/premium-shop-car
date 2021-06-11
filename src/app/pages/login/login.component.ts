import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: User = new User();

  constructor(private router: Router, private service: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    this.service.logar(this.usuario.email, this.usuario.senha).subscribe(
      (response) => {
        const token = JSON.stringify(response);
        localStorage.setItem('access_token', token);
        this.router.navigate(['/']);
      },
      (errorResponse) => {
        console.log('Usuário ou senha errado!');
      }
    );
  }
  

}
