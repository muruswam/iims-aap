import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindinventoryComponent } from './findinventory.component';

describe('FindinventoryComponent', () => {
  let component: FindinventoryComponent;
  let fixture: ComponentFixture<FindinventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindinventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
