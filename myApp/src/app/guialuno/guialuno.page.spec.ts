import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuialunoPage } from './guialuno.page';

describe('GuialunoPage', () => {
  let component: GuialunoPage;
  let fixture: ComponentFixture<GuialunoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuialunoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuialunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
