import { Component, OnInit } from '@angular/core';
import { ApisService } from '../servicio/apis.service';

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
          let urlImg = "http://146.155.28.129:8000" + foto.attributes.url;
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

