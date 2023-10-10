import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Components/landing/landing.component';
import { SignInComponent } from './Components/Register User/sign-in/sign-in.component';
import { SignUpComponent } from './Components/Register User/sign-up/sign-up.component';
import { BookingDashboardComponent } from './Components/booking-dashboard/booking-dashboard.component';
import { BookingConfigurationComponent } from './Components/Admin Features/booking-configuration/booking-configuration.component';
import { BookingDetailsComponent } from './Components/Employee Features/booking-details/booking-details.component';

const routes: Routes = [
{
  path:'', component:LandingComponent,
},
{
  path:'login', component:SignInComponent,
},
{
  path:'signup', component: SignUpComponent
},
{
  path: 'dashboard', component: BookingDashboardComponent
},
{
  path: 'admin', component: BookingConfigurationComponent
},
{
  path: 'employee', component: BookingDetailsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
