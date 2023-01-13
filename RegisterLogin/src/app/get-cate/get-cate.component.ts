import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleGuard } from '../guards/role.guard';
import { LinkService } from '../link.service';
import jwt_decode from "jwt-decode";
@Component({
  selector: 'app-get-cate',
  templateUrl: './get-cate.component.html',
  styleUrls: ['./get-cate.component.css']
})
export class GetCateComponent implements OnInit {
  catagorie:any = []
  precCars:any =null
count:any = 0
data:any =[]
categorie:any = []
constructor(private link:LinkService,private router:Router ,private rolee:RoleGuard,private route:ActivatedRoute){}
  ngOnInit(): void {


    this.catagorie = []
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
})

let cate = this.route.snapshot.paramMap.get('cate');

this.link.getCateCar(cate).subscribe((data)=>{
this.categorie = data
console.log(data)
},(err)=>{
console.log(err)
})

} 




actived(cate:any){
  this.router.navigate(['private/',cate])
  this.ngOnInit()
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
