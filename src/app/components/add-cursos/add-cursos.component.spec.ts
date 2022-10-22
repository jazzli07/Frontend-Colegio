import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcursosComponent } from './add-cursos.component';

describe('AddcursosComponent', () => {
  let component: AddcursosComponent;
  let fixture: ComponentFixture<AddcursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
