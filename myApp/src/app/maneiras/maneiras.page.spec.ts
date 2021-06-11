import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManeirasPage } from './maneiras.page';

describe('ManeirasPage', () => {
  let component: ManeirasPage;
  let fixture: ComponentFixture<ManeirasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManeirasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ManeirasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
