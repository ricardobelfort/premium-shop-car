import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public novoUsuario: User = new User();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    this.router.navigate(['']);
    console.log(this.novoUsuario);
  }

}
