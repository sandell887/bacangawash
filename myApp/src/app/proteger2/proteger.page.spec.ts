import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProtegerPage } from './proteger.page';

describe('ProtegerPage', () => {
  let component: ProtegerPage;
  let fixture: ComponentFixture<ProtegerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtegerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProtegerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
