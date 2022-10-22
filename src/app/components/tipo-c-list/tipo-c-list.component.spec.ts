import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoCListComponent } from './tipo-c-list.component';

describe('TipoCListComponent', () => {
  let component: TipoCListComponent;
  let fixture: ComponentFixture<TipoCListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoCListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoCListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
