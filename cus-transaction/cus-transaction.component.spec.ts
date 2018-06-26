import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusTransactionComponent } from './cus-transaction.component';

describe('CusTransactionComponent', () => {
  let component: CusTransactionComponent;
  let fixture: ComponentFixture<CusTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
