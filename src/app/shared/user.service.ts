import {User} from './user.model';
import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponseModel} from './response.model';
import {CookieService} from 'ngx-cookie-service';

@Injectable({providedIn: 'root'})
export class UserService {
  userData: User = new User();
  userDataObservable: EventEmitter<User> = new EventEmitter<User>();
  isLogin: EventEmitter<boolean> = new EventEmitter<boolean>();
  session: string;

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  checkLogin() {
    this.session = this.cookieService.get('sessionid');
    if(this.session && this.session.trim() != ''){
        if(this.userData.id == undefined){
          this.getUserData().subscribe(res => {
            if (!res.success) {
              console.log('is login: false');
              this.isLogin.emit(false);
            } else {
              console.log('is login: true ');
              this.userData = res.data['user'];
              this.userDataObservable.emit(this.userData);
              this.isLogin.emit(true);
            }
          });
        }
      return true;
    } else {
      return false;
    }

  }

  login(username, password): Observable<any> {
    console.log('login');
    let headers = new HttpHeaders();
    headers.append('contentType', 'application/json');
    let body = new FormData();
    body.append('username', username);
    body.append('password', password);
    return this.http.post<any>('/user/api/login', body, {
      headers,
      observe: 'body',
      withCredentials: true,
    });
  }

  signup(username, password, email, phone): Observable<ResponseModel> {
    console.log('signup');
    let headers = new HttpHeaders();
    headers.append('contentType', 'application/json');
    let body = new FormData();
    body.append('username', username);
    body.append('password', password);
    if (email) {
      body.append('email', email);
    }
    if (phone) {
      body.append('phone_number', phone);
    }
    return this.http.post<ResponseModel>('/user/api/signup', body, {headers});
  }

  getUserData(): Observable<ResponseModel> {
    console.log('checking login');
    let headers = new HttpHeaders();
    headers.append('contentType', 'application/json');
    return this.http.get('/user/api/get/all/user/information', {
      headers,
      withCredentials: true
    });
  }

  logout() {
    console.log('logout');
    return this.http.get('/user/api/logout').subscribe(res => {
      console.log(res);
    });
  }

  checkPassword(userId: number, password: string) {
    // for (let i = 0; i < data.users.length; i++) {
    //   if (data.users[i].id === userId) {
    //     if (data.users[i].password === password) {
    //       return {status: 200, message: 'success'};
    //     }
    //     return {status: 400, message: 'پسورد اشتباه است'};
    //   }
    // }
    // return {status: 400, message: 'کاربر یافت نشد است'};
  }

}
