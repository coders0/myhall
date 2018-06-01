import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HittingjsonComponent } from './hittingjson.component';

describe('HittingjsonComponent', () => {
  let component: HittingjsonComponent;
  let fixture: ComponentFixture<HittingjsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HittingjsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HittingjsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
