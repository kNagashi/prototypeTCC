import { Component, OnInit } from '@angular/core';
import { UtilityComponent } from '../../services/Utility';
import { CrudService } from '../crud.service';
import { Sorvete } from '../../models/sorvete';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  sorvetes: Sorvete[] = [];
  newSorvete = new Sorvete();

  constructor(private util: UtilityComponent, private crudService: CrudService) { }

  public ngOnInit(): void {
    this.crudService
      .getAllSorvetes()
      .subscribe(
        (sorvetes) => {
        this.sorvetes = sorvetes;
      });
  }

}
