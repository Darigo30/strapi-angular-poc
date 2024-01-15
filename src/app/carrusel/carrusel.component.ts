import { Component, OnInit } from '@angular/core';
import { ApisService } from '../servicio/apis.service';
import { environment } from 'src/environments/environment';

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
          let urlImg = environment.urlBase + foto.attributes.url;
          console.log("urlImg", urlImg);
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
