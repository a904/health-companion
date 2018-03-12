import { Injectable, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
@Injectable()

export class ServerService {
  constructor(private http: Http) {}
  storeUserData(url: string, data: {}) {
    return this.http.put(url, data);
  }
}
