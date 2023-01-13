import { Component, OnInit } from '@angular/core';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit{

  constructor(private link:LinkService){}
//categor:any =''
ngOnInit(): void {
  this.reservation.model_voiture = this.link.model
  this.link.getALLCars().subscribe( (data)=>{
    this.model = data
  },(err)=>{
      console.log(err)
  })

 
  
  

}

reservation = {
  lieu_de_depart:'',
  heure_de_depart:new Date(),
  date_de_depart: '',
  lieu_de_retour:'',
  heure_de_retour:new Date(),
  date_de_retour: '',
  model_voiture:'',
  email:'',
  age_permis:'',
  tel:'',
}

depart_retour_lieu = [
  'Aéroport Tunis Carthage',
 'Aéroport Monastir',
 "Aéroport Sousse d'Enfida",
 'Aéroport Djerba',
 'Aéroport Sfax',
 'Hammamet',
 'sousse',
 'tunis',
 'Tbaraka',
 'Mehdia'
]

model:any = []




sendData(){
  

  this.link.PostReservation(this.reservation).subscribe( (res)=>{

  },(err)=>{
    
  })
}




}
