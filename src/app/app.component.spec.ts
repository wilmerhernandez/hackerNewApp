import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { GlobalDataService } from './services/global-data.service';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      providers: [
        GlobalDataService
    ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();    
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should create the app.formatAgo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.formatAgo).toBeDefined();
  });

  it('should create the app.formatAgo', () => {   
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;    
    app.ngOnInit();
    app.formatAgo('sadsad');
    
  });
});
