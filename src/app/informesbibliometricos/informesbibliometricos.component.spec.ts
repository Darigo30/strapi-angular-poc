import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformesbibliometricosComponent } from './informesbibliometricos.component';

describe('InformesbibliometricosComponent', () => {
  let component: InformesbibliometricosComponent;
  let fixture: ComponentFixture<InformesbibliometricosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformesbibliometricosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformesbibliometricosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
