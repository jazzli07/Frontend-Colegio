import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCDetailsComponent } from './tipo-c-details.component';

describe('TipoCDetailsComponent', () => {
  let component: TipoCDetailsComponent;
  let fixture: ComponentFixture<TipoCDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoCDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoCDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
