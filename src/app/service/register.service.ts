import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  constructor(private http: HttpClient) { }
  register(Index: number) {

    return this.http.post('https://reqres.in/api/registerUser', {

      Index,

    });
}
}
