import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancesummaryComponent } from './balancesummary.component';

describe('BalancesummaryComponent', () => {
  let component: BalancesummaryComponent;
  let fixture: ComponentFixture<BalancesummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalancesummaryComponent]
    });
    fixture = TestBed.createComponent(BalancesummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
