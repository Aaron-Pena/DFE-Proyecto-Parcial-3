import { Component , Input} from '@angular/core';

import { Sale } from 'src/app/models/sale';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent {

  @Input() listadoSales: Sale[] = [];

  @Input() cargandoSales = false;

  saleSeleccionado: Sale | null = null;


}
