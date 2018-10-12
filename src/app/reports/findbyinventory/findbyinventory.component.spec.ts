import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbyinventoryComponent } from './findbyinventory.component';

describe('FindbyinventoryComponent', () => {
  let component: FindbyinventoryComponent;
  let fixture: ComponentFixture<FindbyinventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindbyinventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindbyinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
