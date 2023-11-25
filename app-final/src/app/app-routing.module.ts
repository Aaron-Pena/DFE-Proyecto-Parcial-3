import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/dashboard/home/home.component';
import { ExplorerComponent } from './pages/ventas/explorer/explorer.component';
import { NotfoundComponent } from './pages/autenticacion/notfound/notfound.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'explorer', component: ExplorerComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**',component:NotfoundComponent}//Componente not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
