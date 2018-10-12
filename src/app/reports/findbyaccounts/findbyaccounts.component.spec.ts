import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindbyaccountsComponent } from './findbyaccounts.component';

describe('FindbyaccountsComponent', () => {
  let component: FindbyaccountsComponent;
  let fixture: ComponentFixture<FindbyaccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindbyaccountsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindbyaccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
