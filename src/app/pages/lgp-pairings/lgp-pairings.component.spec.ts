import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgpPairingsComponent } from './lgp-pairings.component';

describe('LgpPairingsComponent', () => {
  let component: LgpPairingsComponent;
  let fixture: ComponentFixture<LgpPairingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgpPairingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgpPairingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
