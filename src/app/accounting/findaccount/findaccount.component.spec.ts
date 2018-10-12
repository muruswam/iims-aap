import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindaccountComponent } from './findaccount.component';

describe('FindaccountComponent', () => {
  let component: FindaccountComponent;
  let fixture: ComponentFixture<FindaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
