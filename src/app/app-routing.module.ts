import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CanActiveGuard } from './can-active.guard';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  {
    path:'', 
    pathMatch: "full",
    redirectTo:'register'
  },
  {
    path:'signin',
    canActivate: [CanActiveGuard],
    component: LoginComponent,
  },
  {
    path:'register',
    canActivate: [CanActiveGuard],
    component: RegisterComponent,
  },
  {
    path:'home',
    canActivate: [CanActiveGuard],
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
