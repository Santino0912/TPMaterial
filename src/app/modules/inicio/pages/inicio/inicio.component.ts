import { Component, OnInit } from '@angular/core';
import { Club } from 'src/app/models/club';
import { TarjetaInicio } from 'src/app/models/modelos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  public info: TarjetaInicio[];
  public infor: Club[]

  constructor(){
    this.info = [
      {
        titulo:"Tarjeta 1",
        descripcion:"River Plate el mas grande",
        image:"https://pbs.twimg.com/media/FgC5lLcWQAgo04l.jpg",
        alt:"River Plate",
      }
    ],
    this.infor = [
      {
        nombre:"River Plate",
        año:1901,
        escudo:"../assets/escudo.jpg",
        titulosNac:52,
        titulosInt:12,
        

      }
    ]
  }
  ngOnInit():void{

  }
}

