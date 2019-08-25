import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserpassComponent } from './userpass/userpass.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { NewpassComponent } from './newpass/newpass.component';

const routes: Routes = [
  {path : 'login',component:LoginComponent},
  {path: 'userpass',component: UserpassComponent},
  {path: '',component: HomepageComponent},
  {path: 'signup',component: SignupComponent},
  {path: 'create',component: NewpassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
