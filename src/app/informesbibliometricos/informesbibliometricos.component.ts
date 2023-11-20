import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-informesbibliometricos',
  templateUrl: './informesbibliometricos.component.html',
  styleUrls: ['./informesbibliometricos.component.css']
})
export class InformesbibliometricosComponent{
  @Input() textoApiInforme: any;

  constructor() {}
}
