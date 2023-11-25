import { Component, OnInit } from '@angular/core';
import { Sale } from 'src/app/models/sale';
import {DatasService} from 'src/app/services/data.service';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.scss']
})
export class ExplorerComponent implements OnInit {
  cargandoSales = false;

  listadoSales: Sale[]=[];
  
  constructor(private data:DatasService){

  }

  ngOnInit() {
    this.getDataListas();
  }

  get mensaje():string{
    if(this.cargandoSales){
      return 'Cargando...';
    }else{
      return this.listadoSales.length >0?
      `${this.listadoSales.length}.`:
      'No se han encontrado registros :('
    }
  }

  get importe(): string {
    if (this.cargandoSales) {
      return 'Cargando...';
    } else {
      if (this.listadoSales.length > 0) {
        const total = this.listadoSales.reduce((sum, sale) => sum + sale.price, 0);
        return `${total}`;
      } else {
        return 'No se han encontrado registros :(';
      }
    }
  }


  private getDataListas(){
    this.cargandoSales = true;
    this.data.getDataListas()
    .subscribe(x => {
      this.cargandoSales = false;
      this.listadoSales = x;
    });
  }

}
