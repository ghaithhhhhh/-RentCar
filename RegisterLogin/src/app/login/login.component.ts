import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
user = {
  email:'',password:''
}


constructor(private AuthService:LinkService,private router :Router) {

}
goRegister(){
  this.router.navigate(['register'])
}




login(){
this.AuthService.login(this.user).subscribe ((data:any)=>{
  console.log(data);
  localStorage.setItem('token',data.token);
  this.router.navigate(['/private'])
},
(err)=>{
  console.log(err)
},
)
}


}
