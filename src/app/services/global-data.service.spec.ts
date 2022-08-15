import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GlobalDataService } from './global-data.service';

describe('GlobalDataService', () => {
  let service: GlobalDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }).compileComponents();
    service = TestBed.inject(GlobalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be pages', () => {
    expect(service.pages).toBeDefined();
  });

  it('should be pages', () => {
    const data: any[] = [];
    service.favesSaved = data;
    
  });

  
});
