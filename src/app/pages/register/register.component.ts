import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public novoUsuario: User = new User();

  constructor(private router: Router, private service : AuthService) { }

  ngOnInit(): void {
  }

  register() {
    return this.service.register(this.novoUsuario).subscribe(
      () => {alert("Usuário cadastrado com sucesso!"); this.router.navigate(["/login"])},
      erro => { console.log(erro.error.msg) }
    );
  }

}
