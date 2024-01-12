import {
  Injectable
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';

import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http: HttpClient) {}

  //Obtengo API Slider
  async getStrapiSlider() {
    const conf = {
      headers: {
        Authorization: 'Bearer ' + environment.apiToken,
      }
    }
    const responseSliders = await axios.get(environment.apiUrlSliders, conf);
    console.log("responseSlider", responseSliders);
    try {
      const dataStrapiSliders = responseSliders.data;
      return dataStrapiSliders;
    } catch (error) {
      console.log(error);
    }
  }


  //Obtengo API Noticias
  async getStrapiNoticias() {
    const conf = {
      headers: {
        Authorization: 'Bearer ' + environment.apiToken,
      }
    }
    const reponseNoticias = await axios.get(environment.apiUrlNoticias, conf)
    try {
      const dataStrapiNoticias = reponseNoticias.data;
      return dataStrapiNoticias;
    } catch (error) {
      console.error(error);
    }
  }


  //Obtengo api informes bibliometricos
  async apiUrlInformesBibli() {
    const conf = {
      headers: {
        Authorization: 'Bearer ' + environment.apiToken,
      }
    }
    const responseBiblio = await axios.get(environment.apiUrlInformesBibli, conf)
    try {
      const dataInformesBiblio = responseBiblio.data;
      console.log("dataInformesBiblio", dataInformesBiblio)
      return dataInformesBiblio;
    } catch (error) {
      console.error(error);
    }
  }
}