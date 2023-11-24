import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ReporteVentasModule } from './reporte-ventas/reporte-ventas.module';
import { DataService } from './services/data.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,

    DashboardModule,
    ReporteVentasModule,

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
