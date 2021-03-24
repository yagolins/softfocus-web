import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './main/inicio/inicio.component';
import { InicioModule } from './main/inicio/inicio.module';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full'  },
  {
    path: 'inicio',
    loadChildren: './main/inicio/inicio.module#InicioModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
