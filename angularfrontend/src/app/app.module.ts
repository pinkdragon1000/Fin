import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageTemplateComponent } from './components/page-template/pagetemplate.component';
import { HeaderPageTemplateComponent } from './components/page-template/headerpagetemplate.component';

import { ManageAccountsComponent } from './components/page-content/manage-accounts.component';
import { AddAccountsComponent } from './components/page-content/add-accounts.component';
import { AccountComponent } from './components/page-content/account.component';
import { LoginComponent } from './components/page-content/login.component';
import { SignupComponent } from './components/page-content/signup.component';

import { NavbarComponent } from './components/small-components/navbar.component';
import { HeaderComponent } from './components/small-components/header.component';
import { ClickableListView } from './components/small-components/clickable-list-view.component';

import { ModalComponent } from './components/small-components/help-modal.component';
import { HelpModalButtonComponent } from './components/small-components/help-modal-button.component';
import { EmptyContentComponent } from './components/small-components/empty-content.component';
import { InputComponent } from './components/small-components/input.component';

import { APIService } from './components/api.service';

import { HttpClientModule } from '@angular/common/http';

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
    AccountComponent,
    ModalComponent,
    HelpModalButtonComponent,
    ClickableListView,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [
    InputComponent,
    PageTemplateComponent,
    EmptyContentComponent,
    HeaderPageTemplateComponent,
    NavbarComponent,
    HeaderComponent,
    ClickableListView,
    APIService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
