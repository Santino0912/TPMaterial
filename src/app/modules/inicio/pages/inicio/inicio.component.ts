import { Component, OnInit } from '@angular/core';
import { TarjetaInicio } from 'src/app/models/modelos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  public info: TarjetaInicio[];

  constructor(){
    this.info = [
      {
        titulo:"Tarjeta 1",
        descripcion:"River Plate el mas grande",
        image:"https://pbs.twimg.com/media/FgC5lLcWQAgo04l.jpg",
        alt:"River Plate",
      }
    ]
  }
  ngOnInit():void{

  }
}

