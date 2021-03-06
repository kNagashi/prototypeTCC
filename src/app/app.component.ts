import { Component, OnInit } from '@angular/core';
import { Sorvete } from '../models/sorvete';
import { CrudService } from './crud.service';
import { UtilityComponent } from '../services/Utility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CrudService, UtilityComponent]
})

export class AppComponent implements OnInit {
  title = 'app';
  sorvetes: Sorvete[] = [];
  newSorvete = new Sorvete();

  constructor(private crudService: CrudService) {
  }

  public ngOnInit(): void {
    this.crudService
      .getAllSorvetes()
      .subscribe(
        (sorvetes) => {
        this.sorvetes = sorvetes;
      });
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
