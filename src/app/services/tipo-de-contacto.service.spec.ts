import { TestBed } from '@angular/core/testing';

import { TipoDeContactoService } from './tipo-de-contacto.service';

describe('TipoDeContactoService', () => {
  let service: TipoDeContactoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoDeContactoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
