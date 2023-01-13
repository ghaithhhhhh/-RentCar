import { Component, ElementRef, ViewChild } from '@angular/core';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-addcars',
  templateUrl: './addcars.component.html',
  styleUrls: ['./addcars.component.css']
})
export class AddcarsComponent {
  constructor(private link:LinkService){}
  car = {
   model:'',
   climatisation:'',
   boite_vitess:'',
   n_place:0,
   categorie:'',
   energie:'',
   nombre_porte:0,
   connectivite:'',
   dayPrice:0
  }


  image:any

  //@ViewChild('fileInput', { static: false })
  //FileInput!: ElementRef; 

  selectImage(e:any){
   
   this.image = e.target.files[0];
   console.log(this.image)
  }

addAcar(){
//const imageBlob = this.FileInput.nativeElement.files[0]
const file = new FormData()
file.append('model',this.car.model)
file.append('climatisation',this.car.climatisation)
file.append('boite_vitess',this.car.boite_vitess)
file.append('n_place',this.car.n_place.toString())
file.append('categorie',this.car.categorie)
file.append('energie',this.car.energie)
file.append('nombre_porte',this.car.nombre_porte.toString())
file.append('connectivite',this.car.connectivite)
file.append('dayPrice',this.car.dayPrice.toString())
file.append('file',this.image)




this.link.postCar(file).subscribe((result)=>{
console.log(result)
},(err)=>{
  console.log(err)
})
}




  
}
