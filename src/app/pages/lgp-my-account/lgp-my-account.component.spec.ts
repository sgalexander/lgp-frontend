import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgpMyAccountComponent } from './lgp-my-account.component';

describe('LgpMyAccountComponent', () => {
  let component: LgpMyAccountComponent;
  let fixture: ComponentFixture<LgpMyAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgpMyAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgpMyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
