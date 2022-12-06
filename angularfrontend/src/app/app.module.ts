import { LineChartComponent } from './components/small-components/charts/line-chart.coponent';
import { AuthGuard } from './auth-guard.service';
import { FilterComponent } from './components/small-components/filter.component';
import { ErrorComponent } from './components/small-components/form/error.component';
import { FormComponent } from './components/small-components/form/form.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionAPIService } from './service/transaction-api.service';
import { AccountAPIService } from './service/account-api.service';
import { UserAPIService } from './service/user-api.service';

import { TabsComponent } from './components/small-components/tabs/tabs.component';
import { TabComponent } from './components/small-components/tabs/tab.component';
import { VerticalBarComponent } from './components/small-components/charts/vertical-bar.component';
import { ButtonComponent } from './components/small-components/button.component';
import { InputComponent } from './components/small-components/form/input.component';
import { SelectComponent } from './components/small-components/form/select.component';
import { TableComponent } from './components/small-components/table.component';
import { ModalComponent } from './components/small-components/modal/modal.component';
import { ModalButtonComponent } from './components/small-components/modal/modal-button.component';
import { PageTemplateComponent } from './components/page-template/pagetemplate.component';
import { HeaderPageTemplateComponent } from './components/page-template/headerpagetemplate.component';
import { ManageAccountsComponent } from './components/page-content/manage-accounts.component';
import { AccountComponent } from './components/page-content/account.component';
import { SigninComponent } from './components/page-content/signin.component';
import { SignupComponent } from './components/page-content/signup.component';
import { NavItemsComponent } from './components/small-components/navbar/nav-items.component';
import { NavbarComponent } from './components/small-components/navbar/navbar.component';
import { HeaderComponent } from './components/small-components/header.component';
import { ClickableListViewComponent } from './components/small-components/clickable-list-view.component';

import { EmptyContentComponent } from './components/small-components/empty-content.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputSelectGroupComponent } from './components/small-components/form/input-select-group.component';

import { YearFilterPipe } from './components/filters/year-filter.pipe';
import { MonthFilterPipe } from './components/filters/month-filter.pipe';
import { SearchFilterPipe } from './components/filters/search-filter.pipe';
import { TransactionGroupFilterPipe } from './components/filters/transaction-group.pipe';
import { AccountGraphViewComponent } from './components/page-content/account-graphview.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    ButtonComponent,
    InputComponent,
    InputSelectGroupComponent,
    ModalComponent,
    ModalButtonComponent,
    ErrorComponent,
    FormComponent,
    TableComponent,
    AccountGraphViewComponent,
    HeaderPageTemplateComponent,
    PageTemplateComponent,
    EmptyContentComponent,
    NavItemsComponent,
    NavbarComponent,
    HeaderComponent,
    SigninComponent,
    SignupComponent,
    ManageAccountsComponent,
    YearFilterPipe,
    MonthFilterPipe,
    SearchFilterPipe,
    TransactionGroupFilterPipe,
    FilterComponent,
    AccountComponent,
    ClickableListViewComponent,
    VerticalBarComponent,
    LineChartComponent,
    TabComponent,
    TabsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    InputComponent,
    PageTemplateComponent,
    EmptyContentComponent,
    HeaderPageTemplateComponent,
    AuthGuard,
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
