import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { ReporteVentasModule } from './pages/ventas/reporte-ventas.module';
import { DatasService } from './services/data.service';
import {HttpClientModule} from '@angular/common/http';
import { NotfoundComponent } from './pages/autenticacion/notfound/notfound.component';
import { AutenticacionModule } from './pages/autenticacion/autenticacion.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,

    AutenticacionModule,
    DashboardModule,
    ReporteVentasModule,

  ],
  providers: [DatasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
