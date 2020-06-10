import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/small-components.ts/input.component';
import { ManageAccountsComponent } from './components/page-content/manage-accounts.component';
import { LoginComponent } from './components/page-content/login.component';
import { NavbarComponent } from './components/small-components.ts/navbar.component';
import { PageTemplateComponent } from './components/small-components.ts/pagetemplate.component';
import { ProfileComponent } from './components/page-content/profile.component';

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
