import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ContagemPage } from './contagem.page';

describe('ContagemPage', () => {
  let component: ContagemPage;
  let fixture: ComponentFixture<ContagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContagemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
