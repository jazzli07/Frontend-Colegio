import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersonasComponent } from './add-personas.component';

describe('AddPersonasComponent', () => {
  let component: AddPersonasComponent;
  let fixture: ComponentFixture<AddPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPersonasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
