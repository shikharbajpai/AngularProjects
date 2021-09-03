import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment'

const url = environment.appURL


@Injectable({
  providedIn: 'root'
})
export class PeriodicTableService {

  ApiUrl = url + 'userMgmt/users/'
  BaseUrl = url + 'userMgmt/'
  constructor(private httpClient: HttpClient) { }

  addElement(data) {
    return this.httpClient.post(this.ApiUrl + 'element', data)
  }

  getElement() {
    return this.httpClient.get(this.BaseUrl + 'element');
  }

  editElement(id, data) {
    return this.httpClient.put(this.ApiUrl + `updateElement/${id}`, data);
  }

  deleteElement(id) {
    return this.httpClient.delete(this.ApiUrl + `deleteElement/${id}`);
  }

}
