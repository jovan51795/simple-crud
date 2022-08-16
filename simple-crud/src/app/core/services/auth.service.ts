import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { UserAuth } from 'src/app/auth-components/model/auth-model';
import { User } from 'src/app/user/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token: string = ''

  constructor(private http: HttpClient, private router: Router ) { }

  register = (userData: UserAuth) => {
    return this.http.post(`${environment.apiUrl}/register`, userData).pipe(
      tap((x: any) => {
        if(x.accessToken) {
          this.token = x.accessToken
          this.router.navigate(['login'])
        }
      })
    )
  }

  login = (userData: UserAuth) => {
    return this.http.post(`${environment.apiUrl}/login`, userData).pipe(
      tap((x: any) => {
        this.token = x.accessToken;
        this.router.navigate(['profile'])
      })
    )
  }

  getToken(){
    return this.token ? true : false
  }
}
