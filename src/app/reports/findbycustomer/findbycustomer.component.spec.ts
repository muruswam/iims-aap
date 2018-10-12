import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbycustomerComponent } from './findbycustomer.component';

describe('FindbycustomerComponent', () => {
  let component: FindbycustomerComponent;
  let fixture: ComponentFixture<FindbycustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindbycustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindbycustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
