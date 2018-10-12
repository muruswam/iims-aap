import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbyvendorComponent } from './findbyvendor.component';

describe('FindbyvendorComponent', () => {
  let component: FindbyvendorComponent;
  let fixture: ComponentFixture<FindbyvendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindbyvendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindbyvendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
