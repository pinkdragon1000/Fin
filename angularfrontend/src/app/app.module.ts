import { EmptyContentComponent } from './components/small-components/empty-content.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/small-components/input.component';
import { ManageAccountsComponent } from './components/page-content/manage-accounts.component';
import { AddAccountsComponent } from './components/page-content/add-accounts.component';
import { LoginComponent } from './components/page-content/login.component';
import { SignupComponent } from './components/page-content/signup.component';
import { NavbarComponent } from './components/small-components/navbar.component';
import { HeaderComponent } from './components/small-components/header.component';
import { PageTemplateComponent } from './components/small-components/pagetemplate.component';
import { HeaderPageTemplateComponent } from './components/small-components/headerpagetemplate.component';
import { ProfileComponent } from './components/page-content/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    HeaderPageTemplateComponent,
    PageTemplateComponent,
    EmptyContentComponent,
    NavbarComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    ManageAccountsComponent,
    AddAccountsComponent,
    ProfileComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    InputComponent,
    PageTemplateComponent,
    EmptyContentComponent,
    HeaderPageTemplateComponent,
    NavbarComponent,
    HeaderComponent,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
