import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { PrivateComponent } from './private/private.component';
import { AdminComponent } from './admin/admin.component'
import { JwtHelperService } from '@auth0/angular-jwt';
import { JWT_OPTIONS } from '@auth0/angular-jwt';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AddcarsComponent } from './addcars/addcars.component';
import { AllCarsComponent } from './all-cars/all-cars.component';
import { ListeReservationComponent } from './liste-reservation/liste-reservation.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CarComponent } from './car/car.component';
import { Reser2Component } from './reser2/reser2.component';
import { GetCateComponent } from './get-cate/get-cate.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    PrivateComponent,
    AdminComponent,
    AddcarsComponent,
    AllCarsComponent,
    ListeReservationComponent,
    ReservationComponent,
    CarComponent,
    Reser2Component,
    GetCateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [

    //JWT
    {provide: JWT_OPTIONS,useValue:JWT_OPTIONS},
    JwtHelperService
      //Token intercepter
      ,
      {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
