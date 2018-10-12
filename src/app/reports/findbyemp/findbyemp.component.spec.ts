import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbyempComponent } from './findbyemp.component';

describe('FindbyempComponent', () => {
  let component: FindbyempComponent;
  let fixture: ComponentFixture<FindbyempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindbyempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindbyempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
