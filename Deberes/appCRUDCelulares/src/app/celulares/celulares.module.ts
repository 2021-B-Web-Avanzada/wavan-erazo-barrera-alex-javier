import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CelularesPageComponent } from './celulares-page/celulares-page.component';
import { CelularesTableComponent } from './celulares-table/celulares-table.component';



@NgModule({
  declarations: [
    CelularesPageComponent,
    CelularesTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CelularesModule { }
