import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcasPageComponent } from './marcas/marcas-page/marcas-page.component';

const routes: Routes = [
  {
    path: 'marcas',
    component: MarcasPageComponent,
  },
  {
    path: '',
    redirectTo: '/marcas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
