import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { PrincipalComponent } from './components/principal/principal.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  {path:"" , component: PrincipalComponent},
  {path:"product-detail/:id" , component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
