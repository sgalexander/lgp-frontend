import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LgpInfoComponent } from './lgp-info.component';

describe('LgpInfoComponent', () => {
  let component: LgpInfoComponent;
  let fixture: ComponentFixture<LgpInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LgpInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LgpInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
