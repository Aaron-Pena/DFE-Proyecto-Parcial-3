import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListingComponent } from './listing/listing.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { ResumeComponent } from './resume/resume.component';



@NgModule({
  declarations: [
    ListingComponent,
    ExplorerComponent,
    ResumeComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ExplorerComponent
  ]
})
export class ReporteVentasModule { }
