import { User } from 'src/app/models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  makeLogin(usuario: User) {
    console.log(usuario);
  }
}
