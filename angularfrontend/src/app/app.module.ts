import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input.component';
import { ManageAccountsComponent } from './manage-accounts.component';
import { LoginComponent } from './login.component';
import { NavbarComponent } from './navbar.component';
import { PageTemplateComponent } from './pagetemplate.component';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    PageTemplateComponent,
    NavbarComponent,
    LoginComponent,
    ManageAccountsComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [InputComponent, PageTemplateComponent, NavbarComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
