import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasDetailsComponent } from './personas-details.component';

describe('PersonasDetailsComponent', () => {
  let component: PersonasDetailsComponent;
  let fixture: ComponentFixture<PersonasDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonasDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonasDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
