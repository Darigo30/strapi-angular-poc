import { Component, OnInit } from '@angular/core';
import { ApisService } from '../servicio/apis.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  noticiaArray: any = [];
  informesAarray : any = []

  constructor(private ApisService: ApisService ) {}
  
  ngOnInit(): void {
    //Api noticias
    this.ApisService.getStrapiNoticias().then((dataStrapiNoticias) => {
      dataStrapiNoticias.data.forEach((element: any) => {
        const titNoticia = element.attributes.Titulo;
        element.attributes.Imagennoticia.data.forEach((foto: any) => {
          let urlImg = environment.urlBase + foto.attributes.url;
          this.noticiaArray.push({
            titulo: titNoticia,
            urlImg: urlImg  
          })
        });
      });
    });
    //Api de Informe bibliometrico
    this.ApisService.apiUrlInformesBibli().then((datInformes) => {
      this.informesAarray = datInformes.data
      console.log("infgormes", this.informesAarray)
      console.log("descargar", this.informesAarray.data)
    });
  }
}

