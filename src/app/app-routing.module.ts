import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { UsersComponent } from './users/users.component'

const routes: Routes = [
  { path : '' , redirectTo : '/form' , pathMatch : 'full'},
  { path : 'form' , component : FormvalidationComponent},
  { path: 'users' , component : UsersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
