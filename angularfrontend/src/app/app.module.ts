import { AddTransactionModalComponent } from './components/small-components/add-transaction-modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageTemplateComponent } from './components/page-template/pagetemplate.component';
import { HeaderPageTemplateComponent } from './components/page-template/headerpagetemplate.component';

import { ManageAccountsComponent } from './components/page-content/manage-accounts.component';
import { AddAccountsComponent } from './components/page-content/add-accounts.component';
import { AccountComponent } from './components/page-content/account.component';
import { SigninComponent } from './components/page-content/signin.component';
import { SignupComponent } from './components/page-content/signup.component';

import { NavbarComponent } from './components/small-components/navbar.component';
import { HeaderComponent } from './components/small-components/header.component';
import { ClickableListViewComponent } from './components/small-components/clickable-list-view.component';

import { ModalComponent } from './components/small-components/help-modal.component';
import { HelpModalButtonComponent } from './components/small-components/help-modal-button.component';
import { EmptyContentComponent } from './components/small-components/empty-content.component';
import { InputComponent } from './components/small-components/input.component';

import { APIService } from './components/api.service';

import { HttpClientModule } from '@angular/common/http';
import { AddTransactionButtonComponent } from './components/small-components/add-transaction-modal-button.component';
import { TabsComponent } from './components/small-components/tabs.component';
import { TabComponent } from './components/small-components/tab.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { BarComponent } from './components/page-content/bar.component';
//import { BarComponent1 } from './components/page-content/bar.component1';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    HeaderPageTemplateComponent,
    PageTemplateComponent,
    EmptyContentComponent,
    NavbarComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    ManageAccountsComponent,
    AddAccountsComponent,
    AccountComponent,
    AddTransactionModalComponent,
    AddTransactionButtonComponent,
    TabsComponent,
    TabComponent,
    ModalComponent,
    HelpModalButtonComponent,
    ClickableListViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxChartsModule,
    BrowserAnimationsModule,
  ],
  providers: [
    InputComponent,
    PageTemplateComponent,
    EmptyContentComponent,
    HeaderPageTemplateComponent,
    APIService,
    NavbarComponent,
    HeaderComponent,
    ClickableListViewComponent,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
