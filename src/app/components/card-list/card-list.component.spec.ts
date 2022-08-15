import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalDataService } from 'src/app/services/global-data.service';

import { CardListComponent } from './card-list.component';

describe('CardListComponent', () => {
  let component: CardListComponent;  
  let fixture: ComponentFixture<CardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardListComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should isHeartFaves', () => {
    component.isHeartFaves('asdas','asdas');
  });

  it('should favesHeart', () => {
    let global:GlobalDataService;
    component.favesHeart('asdas','asdas');
  });
  it('should favesHeart', () => {
    component.favesHeart('asdas','asdas');
  });
});
