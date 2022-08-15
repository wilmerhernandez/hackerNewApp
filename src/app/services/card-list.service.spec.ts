import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CardListService } from './card-list.service';

describe('CardListService', () => {
  let service: CardListService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    }).compileComponents();
    service = TestBed.inject(CardListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
