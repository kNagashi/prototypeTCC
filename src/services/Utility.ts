import { Component, OnInit, Injectable } from '@angular/core';
import { Sorvete } from '../models/sorvete';
import { CrudService } from '../app/crud.service';

@Injectable()
export class UtilityComponent {
  title = 'app';
  sorvetes: Sorvete[] = [];
  newSorvete = new Sorvete();

  constructor(private crudService: CrudService) {
  }

  onAddSorvete(sorvete: Sorvete) {
    this.crudService
      .addSorvete(sorvete)
      .subscribe(
        (newSorvete) => {
          this.sorvetes = this.sorvetes.concat(newSorvete);
        }
      );
  }

  onRemoveSorvete(sorvete: Sorvete) {
    this.crudService
      .deleteSorvete(sorvete.id)
      .subscribe(
      (_) => {
        this.sorvetes = this.sorvetes.filter((s) => s.id !== sorvete.id);
      }
    );
  }

  onGetAllSorvete() {
    return this.crudService.getAllSorvetes();
  }

}
