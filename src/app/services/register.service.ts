import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login-model';
import { RegisterModel } from '../models/register-model';
import { ResetPasswordModel } from '../models/resetPassword';
import { Users } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  baseUrl = 'http://localhost:5021/Account/';
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };

  Register(reg: RegisterModel): Observable<RegisterModel> {
    return this.http.post<RegisterModel>(this.baseUrl + 'Register', reg, this.headers).pipe();
  }

  GetAllUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this.baseUrl + 'GetAllUsers').pipe();
  }

  UserLogin(log: LoginModel): Observable<LoginModel> {
    return this.http.post<LoginModel>(this.baseUrl + 'Login', log, this.headers).pipe();
  }

  LogoutUsers() {
    return this.http.get(this.baseUrl + 'Logout', { withCredentials: true }).pipe();
  }

  EmailConfirm(id: string, token: string) {
    return this.http.get(this.baseUrl + 'RegistrationConfirm?ID=' + id + '&Token=' + token).pipe();
  }

  UserNameExist(username: string) {
    return this.http.get(this.baseUrl + 'UserExists?username=' + username).pipe();
  }

  EmailExist(email: string) {
    return this.http.get(this.baseUrl + 'EmailExists?email=' + email).pipe();
  }

  ForgetPassword(email: string) {
    return this.http.get(this.baseUrl + 'ForgetPassword/' + email).pipe();
  }

  ApiResetPassword(passModel: ResetPasswordModel): Observable<ResetPasswordModel> {
    return this.http.post<ResetPasswordModel>(this.baseUrl + 'ResetPassword', passModel, this.headers).pipe();
  }
}
