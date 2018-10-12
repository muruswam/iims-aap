import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindvendorComponent } from './findvendor.component';

describe('FindvendorComponent', () => {
  let component: FindvendorComponent;
  let fixture: ComponentFixture<FindvendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindvendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindvendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
