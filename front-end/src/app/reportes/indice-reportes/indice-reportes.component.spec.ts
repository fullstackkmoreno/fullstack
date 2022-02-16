import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceReportesComponent } from './indice-reportes.component';

describe('IndicePedidosComponent', () => {
  let component: IndiceReportesComponent;
  let fixture: ComponentFixture<IndiceReportesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiceReportesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiceReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
