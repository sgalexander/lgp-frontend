import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgpHeroComponent } from './lgp-hero.component';

describe('LgpHeroComponent', () => {
  let component: LgpHeroComponent;
  let fixture: ComponentFixture<LgpHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgpHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgpHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
