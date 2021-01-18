import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatSpecificPage } from './chat-specific.page';

describe('ChatSpecificPage', () => {
  let component: ChatSpecificPage;
  let fixture: ComponentFixture<ChatSpecificPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatSpecificPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatSpecificPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
