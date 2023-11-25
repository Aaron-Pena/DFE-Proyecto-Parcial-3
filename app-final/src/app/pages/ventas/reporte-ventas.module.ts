import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatasService } from 'src/app/services/data.service';

import { ListingComponent } from './listing/listing.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { ResumeComponent } from './resume/resume.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    ListingComponent,
    ExplorerComponent,
    ResumeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ],
  providers:[
    DatasService
  ],
  exports:[
    ExplorerComponent
  ]
})
export class ReporteVentasModule { }
