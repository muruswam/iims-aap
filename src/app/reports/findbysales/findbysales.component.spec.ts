import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbysalesComponent } from './findbysales.component';

describe('FindbysalesComponent', () => {
  let component: FindbysalesComponent;
  let fixture: ComponentFixture<FindbysalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindbysalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindbysalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
