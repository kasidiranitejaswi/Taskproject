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
import { NavbarComponent } from './navbar/navbar.component';
import { FormarraysComponent } from './formarrays/formarrays.component';
// import { AuthGuard } from './auth.guard';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth.service';


const routes: Routes = ([
  { path : '' , redirectTo : '/navbar' , pathMatch : 'full'},
  // { path : 'navbar' , component : NavbarComponent },
  // { path : '' , redirectTo : '/registration' , pathMatch : 'full'},
  { path : 'registration' , component : RegistrationComponent},
  { path : '' , redirectTo : '/form' , pathMatch : 'full'},
  { path : 'formarrays' , component : FormarraysComponent},
  { path : 'signup', component: SignupComponent},
  { path : 'Login', component: LoginComponent},
  { path : 'forgotpassword', component: ForgotpasswordComponent},
  { path : 'resetpassword/:id', component: ResetpasswordComponent},  
  // { path : 'filt', component: TestfilterComponent, canActivate: [AuthGuard]},
  { path : 'filt', component: TestfilterComponent,canActivate:[AuthService]},
  { path : 'form' , component : FormvalidationComponent},
  { path : 'users' , component : UsersComponent },
  { path : 'auth' , loadChildren : './auth/auth.module#AuthModule' },
])

@NgModule({
  imports:[
     AuthModule,
     RouterModule.forRoot(routes)
  ],
  
  exports: [
    RouterModule,
  ],
  providers:[
    AuthService
  ]
})
export class AppRoutingModule { }
