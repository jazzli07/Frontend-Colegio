import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposDetailsComponent } from './grupos-details.component';

describe('GruposDetailsComponent', () => {
  let component: GruposDetailsComponent;
  let fixture: ComponentFixture<GruposDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GruposDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GruposDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
