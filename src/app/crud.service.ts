import { Injectable } from '@angular/core';
import { Sorvete } from '../models/sorvete';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CrudService {

  sorvetes: Sorvete[] = [];

  constructor(private api: ApiService) { }

  // Simulate ADD
  addSorvete(sorv: Sorvete): Observable<Sorvete> {
   return this.api.addSorvete(sorv);
  }

  // Update
  updateSorvete(sorv: Sorvete): Observable<Sorvete> {
    return this.api.updateSorvete(sorv);
  }

  // Get All
  getAllSorvetes(): Observable<Sorvete[]> {
    return this.api.getAllSorvetes();
  }

  // Simulate Delete
  deleteSorvete(id: number): Observable<Sorvete> {
    return this.api.deleteSorveteById(id);
  }
}
