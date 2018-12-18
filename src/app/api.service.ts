import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  /**Sends data from contact form */
  addContactData(data) {
    return this.http.post('http://proprius.co.nz/testing/public/contacts', data)
  }
}
