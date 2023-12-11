import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/components/home/home.component';
import { ClienteRedComponent } from './views/components/cliente/cliente-red/cliente-red.component';
import { ClienteCreateComponent } from './views/components/cliente/cliente-create/cliente-create.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Clientes',
    component: ClienteRedComponent
  },
  {
    path: 'clientes/create',
    component: ClienteCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
