import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthsignupComponent } from './authsignup/authsignup.component';
import { AuthloginComponent } from './authlogin/authlogin.component';
import { AuthComponent } from './auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AuthGuard } from '../auth.guard';


export const childRoutes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'auth/authsignup', component: AuthsignupComponent },
  { path: 'auth/authlogin', component: AuthloginComponent},
  { path: '', redirectTo: '/auth/authsignup', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AuthsignupComponent, 
    AuthloginComponent, 
    AuthComponent
  ],

  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes),
    FormsModule,
    ReactiveFormsModule,   
  ]
})
export class AuthModule { }
