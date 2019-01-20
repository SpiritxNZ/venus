import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  test='en';
  constructor() { 
  }
  changetesttocn()
  {
    this.test='cn'
  }
  changetesttoen()
  {
    this.test='en'
  }
}
