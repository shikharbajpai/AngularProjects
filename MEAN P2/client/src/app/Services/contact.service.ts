import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



const url = environment.appURL

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  ApiUrl = url + 'form/';
  _getUrl = "contacts";
  _postUrl = "addcontact";
  _deleteUrl = "/contact/";

  constructor(private http: HttpClient) { }


  getContact() {
    return this.http.get(this.ApiUrl + this._getUrl);
  }

  addContact(contact) {
    return this.http.post(this.ApiUrl + this._postUrl, contact)
  }

  deleteContact(id) {
    return this.http.delete(this.ApiUrl + `contact/${id}`);
  }
}
