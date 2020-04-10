import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ShowAllContactComponent } from './show-all-contact/show-all-contact.component';
import { SearchContactComponent } from './search-contact/search-contact.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"home",component:HomeComponent,children:[
    {path:"dashboard",component:DashboardComponent},
    {path:"addContact",component:AddContactComponent},
    {path:"showAllContact",component:ShowAllContactComponent},
    {path:"searchContact",component:SearchContactComponent},
    {path:"editUser",component:EditUserComponent},
    {path:"deleteUser",component:DeleteUserComponent},
  ],},
  {path:"logout",component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
