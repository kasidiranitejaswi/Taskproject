import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { UsersComponent } from './users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule} from 'ngx-pagination';
import { MatPaginatorModule} from '@angular/material/paginator';
import { TestfilterComponent } from './testfilter/testfilter.component';
import { FilterPipe } from 'filter.pipe';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { SignupComponent } from './signup/signup.component'; 
import { RegisterService} from './register.service'
import { RegistrationComponent } from './registration/registration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormarraysComponent } from './formarrays/formarrays.component';
import { MatFormFieldModule,MatInputModule} from '@angular/material';
// import { AuthGuard } from './auth.guard';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NgxPaginationModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule
      
    ],
    exports:[
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule
    ],
    declarations: [
        AppComponent,
        FormvalidationComponent,
        UsersComponent,
        TestfilterComponent,
        FilterPipe,
        ForgotpasswordComponent,
        LoginComponent,
        ResetpasswordComponent,
        SignupComponent,
        RegistrationComponent,
        NavbarComponent,
        FormarraysComponent,
    ],
    providers: [RegisterService],
    bootstrap: [AppComponent]
})
export class AppModule { }