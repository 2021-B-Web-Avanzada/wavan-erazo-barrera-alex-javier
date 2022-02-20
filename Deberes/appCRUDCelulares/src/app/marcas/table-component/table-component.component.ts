import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Marca } from 'src/app/interfaces/marcas.interfaces';
import { MarcaServiceService } from 'src/app/services/marca-service.service';

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css'],
  providers: [MessageService,ConfirmationService]

})
export class TableComponentComponent implements OnInit {
  @ViewChild('dt') dt: Table | undefined;
  brands: Marca[] = [];
  selectedBrands: Marca[] = [];
  brand!: Marca;
  brandDialog?: boolean;
  submitted?: boolean;
  constructor(
    private serviceMarca: MarcaServiceService
  ) { }

  ngOnInit(): void {
    this.serviceMarca.getMarcas()
    .subscribe(result =>{
      console.log(result)
      this.brands = result
    });
  }

  openNew(){
   this.brand = {
    id_marca: 0,
    nombre: '',
    es_nacional: true,
    acciones: 0,
    year: 0,
    fundador: ''

   }
    this.submitted = false;
    this.brandDialog = true;


  }

  deleteSelectedBrand(){

  }

  hideDialog(){

  }

  saveBrand(){

  }

  editBrand(brand: Marca){

  }

  deleteBrand( brand: Marca){

  }
  applyFilterGlobal($event: any, stringVal: string) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }

}
