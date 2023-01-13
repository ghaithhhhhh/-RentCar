import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcarsComponent } from './addcars/addcars.component';
import { AdminComponent } from './admin/admin.component';
import { CarComponent } from './car/car.component';
import { GetCateComponent } from './get-cate/get-cate.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { ListeReservationComponent } from './liste-reservation/liste-reservation.component';
import { LoginComponent } from './login/login.component';
import { PrivateComponent } from './private/private.component';
import { RegisterComponent } from './register/register.component';
import { Reser2Component } from './reser2/reser2.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  {path:'', redirectTo:'login' ,pathMatch:'full'},
  {path:'login',component:LoginComponent },
  {path:'register',component:RegisterComponent},
  {path:'private',component:PrivateComponent, canActivate:[AuthGuard] },
 // {path:'private/:cate',component:GetCateComponent, canActivate:[AuthGuard] },
  {path:'reservation',component:ReservationComponent, canActivate:[AuthGuard] },
  {path:'private/:id',component:CarComponent, canActivate:[AuthGuard] },
  {path:'reservation/:model',component:Reser2Component, canActivate:[AuthGuard] },
  {path:'addcars',component:AddcarsComponent,canActivate:[RoleGuard] ,data:{expectedRole:'admin'}},
  {path:'voirListeResrvation',component:ListeReservationComponent,canActivate:[RoleGuard] ,data:{expectedRole:'admin'}},
  {path:'admin',component:AdminComponent,canActivate:[RoleGuard] ,data:{expectedRole:'admin'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
