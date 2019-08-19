import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { UsersComponent } from './users/users.component';
import { TestfilterComponent } from './testfilter/testfilter.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { SignupComponent } from './signup/signup.component'; 

const routes: Routes = ([
  { path : '' , redirectTo : '/registration' , pathMatch : 'full'},
  { path : 'registration' , component : RegistrationComponent },
  { path : '' , redirectTo : '/form' , pathMatch : 'full'},
  // { path : "", component: SignupComponent},
  { path : 'signup', component: SignupComponent},
  { path : 'Login', component: LoginComponent},
  { path : 'forgotpassword', component: ForgotpasswordComponent},
  { path : 'resetpassword/:id', component: ResetpasswordComponent},  
  { path : 'filt', component: TestfilterComponent},
  { path : 'form' , component : FormvalidationComponent},
  { path : 'users' , component : UsersComponent }
])

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
