import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = 'http://proprius.co.nz/testing/public'

  constructor(private http: HttpClient) { }

  /**Sends data from contact form */


  addContactData(data) {
    return this.http.post(this.baseUrl+'/contacts', data)
  }

  postEmail(data) {
    return this.http.post('https://spiritx.co.nz/mail', data)
  }

  getAllCourses(){
    return this.http.get(this.baseUrl+'/findcourses')
  }

  showCourse(courseId){
    return this.http.get(this.baseUrl+'/findcourses/'+courseId)
  }
}
