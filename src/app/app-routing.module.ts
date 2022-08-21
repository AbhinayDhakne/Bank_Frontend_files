import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountComponent } from './account/account.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { LoginComponent } from './login/login.component';
import { ShowAccountComponent } from './show-account/show-account.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'users',component:UserListComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path: 'show-account/:id', component: ShowAccountComponent

 },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  
  {
    path:'createuser',component:CreateUserComponent
  },
  {
    path:'createaccount',component:CreateAccountComponent
  },
  { 
    path: 'update/:id', component: UserComponent 
  },
  {
     path: 'acc/update/:id', component: AccountComponent 
  },
  {
    path: 'accounts', component: AccountListComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
