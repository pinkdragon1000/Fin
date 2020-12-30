import { AddAccountsComponent } from './components/page-content/add-accounts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/page-content/login.component';
import { SignupComponent } from './components/page-content/signup.component';
import { ManageAccountsComponent } from './components/page-content/manage-accounts.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'addAccounts', component: AddAccountsComponent },
  { path: 'manageAccounts', component: ManageAccountsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
