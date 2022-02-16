import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPostresComponent } from './listado-postres.component';

describe('ListadoPostresComponent', () => {
  let component: ListadoPostresComponent;
  let fixture: ComponentFixture<ListadoPostresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPostresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPostresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
