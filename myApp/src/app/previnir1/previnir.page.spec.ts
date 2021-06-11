import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrevinirPage } from './previnir.page';

describe('PrevinirPage', () => {
  let component: PrevinirPage;
  let fixture: ComponentFixture<PrevinirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevinirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrevinirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
