import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionAPIService } from './service/transaction-api.service';
import { AccountAPIService } from './service/account-api.service';
import { UserAPIService } from './service/user-api.service';

import { ButtonComponent } from './components/small-components/button.component';
import { InputComponent } from './components/small-components/input.component';
import { InputGroupComponent } from './components/small-components/input-group.component';
import { SelectComponent } from './components/small-components/select.component';
import { TableComponent } from './components/small-components/table.component';
import { ModalComponent } from './components/small-components/modal.component';
import { ModalButtonComponent } from './components/small-components/modal-button.component';
import { PageTemplateComponent } from './components/page-template/pagetemplate.component';
import { HeaderPageTemplateComponent } from './components/page-template/headerpagetemplate.component';
import { ManageAccountsComponent } from './components/page-content/manage-accounts.component';
import { AddAccountsComponent } from './components/page-content/add-accounts.component';
import { AccountComponent } from './components/page-content/account.component';
import { SigninComponent } from './components/page-content/signin.component';
import { SignupComponent } from './components/page-content/signup.component';
import { NavItemsComponent } from './components/small-components/nav-items.component';
import { NavbarComponent } from './components/small-components/navbar.component';
import { HeaderComponent } from './components/small-components/header.component';
import { ClickableListViewComponent } from './components/small-components/clickable-list-view.component';

import { EmptyContentComponent } from './components/small-components/empty-content.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputSelectGroupComponent } from './components/small-components/input-select-group.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    ButtonComponent,
    InputGroupComponent,
    InputSelectGroupComponent,
    InputComponent,
    TableComponent,
    HeaderPageTemplateComponent,
    PageTemplateComponent,
    EmptyContentComponent,
    NavItemsComponent,
    NavbarComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    ModalButtonComponent,
    ManageAccountsComponent,
    AddAccountsComponent,
    AccountComponent,
    ModalComponent,
    ClickableListViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    InputGroupComponent,
    InputComponent,
    PageTemplateComponent,
    EmptyContentComponent,
    HeaderPageTemplateComponent,
    UserAPIService,
    AccountAPIService,
    TransactionAPIService,
    NavItemsComponent,
    NavbarComponent,
    HeaderComponent,
    ClickableListViewComponent,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
