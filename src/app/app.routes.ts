import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import{ControlService} from './Services/control.service';
export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent ,canActivate:[ControlService] },
  {path: 'SignUp',component:SignUpComponent},
  {path: 'Login',component: LoginComponent},

]
