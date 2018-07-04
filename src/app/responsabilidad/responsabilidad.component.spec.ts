import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsabilidadComponent } from './responsabilidad.component';

describe('ResponsabilidadComponent', () => {
  let component: ResponsabilidadComponent;
  let fixture: ComponentFixture<ResponsabilidadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsabilidadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
