import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinkService } from '../link.service';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{


//user:User = new User();
user = {
  nom:'',
  prenom:'',
  password:'',
  email:'',
}
  constructor(public link:LinkService,private router:Router){}
  ngOnInit( ): void {
   
  }

 register(){
  this.link.signup(this.user).subscribe(  
    (data)=>{
       console.log(data)
       this.gohome()
    },
    (err) => {
      console.log(err)
    }

  )
 }


 gohome(){
  this.router.navigate(['/private'])
 }

}
