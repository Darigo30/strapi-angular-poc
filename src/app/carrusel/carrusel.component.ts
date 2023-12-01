import { Component, OnInit } from '@angular/core';
import { ApisService } from '../servicio/apis.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  dataStrapiSliders: any = [];  
  slider: any = []; 

  constructor(private ApisService: ApisService ) {}

  ngOnInit(): void {
    this.ApisService.getStrapiSlider().then((dataStrapiSliders) => {
      dataStrapiSliders.data.forEach((element: any) => {
        element.attributes.Imagen.data.forEach((foto: any) => {
          let urlImg = "http://146.155.28.129" + foto.attributes.url;
            this.slider.push({
              nombres: element.attributes.Titulo,
              bajada : element.attributes.Bajada,
              urlImg : urlImg
            });
        })
      })
    });
   }

}
