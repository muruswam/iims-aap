import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListinventoryComponent } from './listinventory.component';

describe('ListinventoryComponent', () => {
  let component: ListinventoryComponent;
  let fixture: ComponentFixture<ListinventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListinventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
