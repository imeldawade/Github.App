import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }


  displayUsers() {
    return this.http.get('https://api.github.com/users')
  }

  getUser(getUser:any) {
    return this.http.get(`https://api.github.com/users/${getUser}`)
  }

  getRepos(getUser:any) {
    return this.http.get(`https://api.github.com/users/${getUser}/repos`)
  }

}
