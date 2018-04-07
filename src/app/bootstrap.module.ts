import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import { ButtonsModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';
import { PopoverModule } from 'ngx-bootstrap';
import { ProgressbarModule } from 'ngx-bootstrap';
import { RatingModule } from 'ngx-bootstrap';
import { SortableModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import { TimepickerModule } from 'ngx-bootstrap';
import { TooltipModule } from 'ngx-bootstrap';
import { TypeaheadModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    RatingModule.forRoot(),
    SortableModule.forRoot(),
    TabsModule.forRoot(),
    TimepickerModule.forRoot(),
    TooltipModule.forRoot(),
    TypeaheadModule.forRoot()
  ],
  exports: [
    AccordionModule,
    AlertModule,
    ButtonsModule,
    CarouselModule,
    CollapseModule,
    BsDropdownModule,
    ModalModule,
    PaginationModule,
    PopoverModule,
    ProgressbarModule,
    RatingModule,
    SortableModule,
    TabsModule,
    TimepickerModule,
    TooltipModule,
    TypeaheadModule
  ],
  declarations: []
})
export class BootstrapModule { }
