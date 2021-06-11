import { User } from 'src/app/models/user.model';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {readonly tokenURL: string = environment.API + environment.obterToken;
  readonly url: string = `${environment.API}/login`;
  clienteId = environment.clienteId;
  secret = environment.clienteSecret;
  username: string;
  password: string;
  jwtHelper: JwtHelperService= new JwtHelperService();

  isAuthenticated(): boolean{
    const token = this.obterToken();
    if(token){
      const expired = this.jwtHelper.isTokenExpired(token);
      return !expired;
    }
    return false;
  }

  obterToken(){
    const tokenString = localStorage.getItem('access_token');
    if(tokenString){
      const token = JSON.parse(tokenString).access_token;
      return token;
    }
    return null;
  }

  logout(){
    localStorage.removeItem('access_token');
  }

  getUsuario(): string {
    const token = this.obterToken();
    const username = this.jwtHelper.decodeToken(token).user_name;
    return username;
  }


  logar(email: string, password: string): Observable<any> {
    const params = new HttpParams().set('username', email).set('password', password).set('grant_type', 'password');

    const headers = {
      // btoa serve para codificar, para juntar o id com o secret é id:secret
      'Authorization': 'Basic ' + btoa(`${this.clienteId}:${this.secret}`),
      'Content-Type' : 'application/x-www-form-urlencoded'
    };

    return this.http.post<any>(this.tokenURL, params.toString(), { headers } );
    //OBS: headers é pra usar esse nome! retorna um headers no callback
  }

  register(user: User): Observable<any> {
    return this.http.post<User>(this.url, user);
  }

  constructor(private http: HttpClient) { }
}
