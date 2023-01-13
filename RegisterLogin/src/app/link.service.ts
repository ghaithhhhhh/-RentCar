import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtConfig } from '@auth0/angular-jwt';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  constructor(private http:HttpClient,
    private JwtHelper:JwtHelperService) { }

 url = 'http://localhost:5000/auth'
 login(user:any){
 return this.http.post( this.url+'/signin' ,user)
 }
 signup(user:any){
  return this.http.post( this.url+'/signUp' ,user)
 }

 postCar(car:any){
  return this.http.post(this.url+'/postCarr',car)
 }

 getALLCars(){
  return this.http.get(this.url+`/getAll`)
 }
 getCateCar(cate:any){
  return this.http.get(`${this.url}/getCateCar/${cate}`)
 }
 
 DeleteAcar(id:any){
  console.log(id)
    return this.http.delete(`${this.url}/DeleteCar/${id}`) 
 }

 PostReservation(reservation:any){
  return this.http.post(this.url+ '/postInfo',reservation )
 }


 getOneCar(id:any){
   return  this.http.get(`${this.url}/getone/${id}`)
 }



isAuth():boolean {
const token = localStorage.getItem('token');
if(this.JwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
  return false;
}
return true
}
 

model:any



}
