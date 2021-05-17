import {User} from './user.model';
import {EventEmitter, Injectable} from '@angular/core';
// import * as data from './mock-data.json';
// import {BASE_URL} from './constant.js';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ResponseModel} from './response.model';
import {tap} from 'rxjs/operators';
import {CookieService} from 'ngx-cookie-service';

const data = {
  'users': [
    {'id': 1, 'name': 'رضا', 'lastName': 'اسدی', 'email': 'reza@mail.com', 'password': '1234', 'gender': 'male', 'age': 23},
    {'id': 2, 'name': 'کاربر', 'lastName': 'تست', 'email': 'test@mail.com', 'password': '1234', 'gender': 'female', 'age': 30}
  ]
};

@Injectable({providedIn: 'root'})
export class UserService {
  userData: User = new User();
  userDataObservable: EventEmitter<User> = new EventEmitter<User>();
  isLogin: boolean = false;
  session: string;

  // users fields
  users: User[] = [];

  constructor(private http: HttpClient, private cookieService: CookieService) {
  }

  checkLogin() {
    // this.session = window.localStorage.getItem('session');
    this.session = this.cookieService.get('sessionid');
    console.log(this.cookieService.get('sessionid'));
    console.log(this.cookieService.get('sessionId'));
    console.log(this.cookieService.get('session'));
    console.log(this.session);
    if (this.session == null || this.session == '') {
      return this.isLogin = false;
    } else {
      this.getUserData().subscribe( res => {
        console.log(res);
        this.userData = res.data["user"];
        this.userDataObservable.emit(this.userData);
      })
      return this.isLogin = true;
    }
  }

  login(username, password): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('contentType', 'application/json');
    let body = new FormData();
    body.append('username', username);
    body.append('password', password);
    return this.http.post<any>('/user/api/login', body, {
      headers,
      observe: 'response',
      withCredentials: true
    });
  }

  signup(username, password, email, phone): Observable<ResponseModel> {
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
    return this.http.post<ResponseModel>( '/user/api/signup', body, {headers});
  }

  getUserData() : Observable<ResponseModel> {
    let headers = new HttpHeaders();
    headers.append('contentType', 'application/json');
    return this.http.get('/user/api/get/all/user/information', {
      headers,
      withCredentials: true
    })
  }

  logout() {
    this.isLogin = false;
    this.session = null;
    // window.localStorage.removeItem('session');
    this.userData = undefined;
    this.userDataObservable.emit(undefined);
    this.cookieService.delete('sessionid')
  }
  //
  // createAccount(user: any) {
  //   this.userData = new User(user.id, user.name, user.lastName, user.email);
  //   this.userData.age = user.age;
  //   this.userData.gender = user.gender;
  // }

  checkPassword(userId: number, password: string) {
    for (let i = 0; i < data.users.length; i++) {
      if (data.users[i].id === userId) {
        if (data.users[i].password === password) {
          return {status: 200, message: 'success'};
        }
        return {status: 400, message: 'پسورد اشتباه است'};
      }
    }
    return {status: 400, message: 'کاربر یافت نشد است'};
  }


  // users section
  getUsers() {
    if (this.users.length) {
      return this.users;
    } else {
      for (let i = 0; i < data.users.length; i++) {
        // this.users.push(new User(data.users[i].id, data.users[i].name, data.users[i].lastName, data.users[i].email));
      }
      return this.users;
    }
  }

  getUser(id: number) {
    for (let i = 0; i < data.users.length; i++) {
      if (this.users[i].id === id) {
        return this.users[i];
      }
    }
  }

  addUser(user) {
    this.users = [...this.users, user];
  }

  editUser(id: number, user: User) {
    for (let i = 0; i < data.users.length; i++) {
      if (this.users[i].id === id) {
        this.users[i] = user;
      }
    }
  }

  deleteUser(id: number) {
    for (let i = 0; i < data.users.length; i++) {
      if (this.users[i].id === id) {

        console.log(this.users, this.users[i].id, i);
        this.users.splice(i, 1);

        return;
      }
    }
  }


}
