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
  es_nacionalOptions = [
    {label: 'SI', value: true},
    {label: 'NO', value: false}

  ];
  constructor(
    private serviceMarca: MarcaServiceService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.serviceMarca.getMarcas()
    .subscribe(result =>{
      console.log(result)
      this.brands = result
    });
  }

  openNew(){
   this.brand = {}
    this.submitted = false;
    this.brandDialog = true;


  }

  deleteSelectedBrand(){

  }

  hideDialog(){
    this.brandDialog = false;
    this.submitted=false;

  }

  saveBrand() {
    this.submitted = true;
    console.log(this.brand)
    this.serviceMarca.saveMarca(this.brand)
    .subscribe(resp =>{
      console.log(JSON.parse(resp.toString())) //no llega
    })
    this.brands.push(this.brand)
      this.hideDialog()


  }

  editBrand(brand: Marca){

  }

  deleteBrand( brand: Marca){
    this.confirmationService.confirm({
      message:'Estas seguro de borrar ' + brand.nombre + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.serviceMarca.deleteMarca(brand.id_marca!.toString()).subscribe(()=>{
          this.brands = this.brands.filter(val => val.id_marca !== brand.id_marca);
          this.brand = {};
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Marca Borrada', life: 3000});
        })

    }
    })

  }
  applyFilterGlobal($event: any, stringVal: string) {
    this.dt!.filterGlobal(($event.target as HTMLInputElement).value, 'contains');
  }

}
