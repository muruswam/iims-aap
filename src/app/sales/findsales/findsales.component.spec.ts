import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindsalesComponent } from './findsales.component';

describe('FindsalesComponent', () => {
  let component: FindsalesComponent;
  let fixture: ComponentFixture<FindsalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindsalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
