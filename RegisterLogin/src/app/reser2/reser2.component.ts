import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-reser2',
  templateUrl: './reser2.component.html',
  styleUrls: ['./reser2.component.css']
})
export class Reser2Component implements OnInit{
  constructor(private route:ActivatedRoute,private link:LinkService){}
  ngOnInit(): void {
   
   this.link.model = this.route.snapshot.paramMap.get('model')
  }
  
}
