import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './input.component';
import { ManageAccountsComponent } from './manage-accounts.component';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageAccountsComponent,
    LoginComponent,
    InputComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [InputComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
