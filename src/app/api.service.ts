import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { Sorvete } from '../models/sorvete';
import { Observable } from 'rxjs/Observable';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  // API: GET
  public getAllSorvetes(): Observable<Sorvete[]> {
    return this.http
      .get(API_URL + '/sorvetes')
      .map(response => {
      const sorvetes = response.json();
      // tslint:disable-next-line:no-shadowed-variable
      return sorvetes.map((sorvete) => new Sorvete(sorvete));
    }).catch(this.handleError);
  }

  // API: POST
  public addSorvete(sorvete: Sorvete): Observable<Sorvete> {
    return this.http
      .post(API_URL + '/sorvetes', sorvete)
      .map(response => {
       return new Sorvete(response.json());
    }).catch(this.handleError);
  }

  // API DELETE
  public deleteSorveteById(id: number) {
    return this.http
      .delete(API_URL + '/sorvetes' + id)
      .map(response => null)
      .catch(this.handleError);
  }

  // API UPDATE
  public updateSorvete(sorvete: Sorvete): Observable<Sorvete> {
    return this.http.put(API_URL + '/sorvetes' + sorvete.id, sorvete).map(response => {
      return new Sorvete(response.json());
    }).catch(this.handleError);
  }


  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
