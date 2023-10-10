import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './Components/Register User/sign-up/sign-up.component';
import { SignInComponent } from './Components/Register User/sign-in/sign-in.component';
import { LandingComponent } from './Components/landing/landing.component';
import { BookingDashboardComponent } from './Components/booking-dashboard/booking-dashboard.component';
import { HeaderComponent } from './Components/header/header.component';
import { BookingConfigurationComponent } from './Components/Admin Features/booking-configuration/booking-configuration.component';
import { BookingDetailsComponent } from './Components/Employee Features/booking-details/booking-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    LandingComponent,
    BookingDashboardComponent,
    HeaderComponent,
    BookingConfigurationComponent,
    BookingDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
