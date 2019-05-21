import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgpHeroAvatarComponent } from './lgp-hero-avatar.component';

describe('LgpHeroAvatarComponent', () => {
  let component: LgpHeroAvatarComponent;
  let fixture: ComponentFixture<LgpHeroAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgpHeroAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgpHeroAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
