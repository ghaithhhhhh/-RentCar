import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';
import { RoleGuard } from '../guards/role.guard';
import { LinkService } from '../link.service';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.css']
})
export class AllCarsComponent implements OnInit{
data:any = []
precCars:any =null;
catagorie:any = []
count:any = 0
constructor(private link:LinkService,private router:Router ,private rolee:RoleGuard,private route:ActivatedRoute){}

categor:any = ' '
  ngOnInit(): void {
       this.link.getALLCars().subscribe( (data)=>{
           this.data = data;


           for (var i=0;i<this.data.length;i++){
               this.count+=1
               if(this.data[i].categorie != this.precCars){
                this.catagorie.push({id:this.data[i].id,categorie:this.data[i].categorie,count:this.count})  
                this.count=0        
               }
               this.precCars = this.data[i].categorie
           }
           console.log(this.catagorie)
       } ,(err)=>{
        console.log(err)
       } )


    

  }





actived(cate:any){
  this.router.navigate(['private/',cate])
}




  deleteCar(id:any){
    
      this.link.DeleteAcar(id).subscribe( (data)=>{
        console.log(data)
        this.ngOnInit()
      }
      ,(err)=>{
        console.log(err)
      }
      )
  }

  seeCar(id:any){
      this.router.navigate(['private/',id])
  }





checkAdmin(){
  var token =  localStorage.getItem('token')
  const decodedToken:any = jwt_decode(JSON.stringify(token))
  if(decodedToken.role === 'admin'){
    return true
  }else{
    return false
  }
}

}
