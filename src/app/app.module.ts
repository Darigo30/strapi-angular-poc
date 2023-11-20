import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { InformesbibliometricosComponent } from './informesbibliometricos/informesbibliometricos.component';

@NgModule({
  declarations: [
    AppComponent,
    CarruselComponent,
    HeaderComponent,
    NoticiasComponent,
    InformesbibliometricosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
