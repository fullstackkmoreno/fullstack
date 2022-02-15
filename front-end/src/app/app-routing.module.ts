import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { IndiceReportesComponent } from './reportes/indice-reportes/indice-reportes.component';
import { FiltroRecaudosComponent } from './recaudos/filtro-recaudos/filtro-recaudos.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent },
  {path: 'recaudo', component: FiltroRecaudosComponent },
  {path: 'reporte', component: IndiceReportesComponent},

  {path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
