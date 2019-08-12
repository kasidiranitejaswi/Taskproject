import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormvalidationComponent } from './formvalidation/formvalidation.component';
import { UsersComponent } from './users/users.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
      
    ],
    declarations: [
        AppComponent,
        FormvalidationComponent,
        UsersComponent
        
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }