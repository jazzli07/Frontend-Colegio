import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTipoDeContactoComponent } from './add-tipo-de-contacto.component';

describe('AddTipoDeContactoComponent', () => {
  let component: AddTipoDeContactoComponent;
  let fixture: ComponentFixture<AddTipoDeContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTipoDeContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTipoDeContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
