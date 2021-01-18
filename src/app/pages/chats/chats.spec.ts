import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Chats } from './chats';

describe('Chats', () => {
  let component: Chats;
  let fixture: ComponentFixture<Chats>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chats ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Chats);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
