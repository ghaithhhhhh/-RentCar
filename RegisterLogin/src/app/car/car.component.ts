import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{
  constructor(private link:LinkService,private router:Router ,private route:ActivatedRoute){}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.link.getOneCar(id).subscribe( (data:any)=>{
        this.car = data[0] 
    },(err)=>{
      console.log(err)
    })
  }
 car:any
  reserve(){
    this.router.navigate(['reservation/',this.car.model])
  }
 


}
