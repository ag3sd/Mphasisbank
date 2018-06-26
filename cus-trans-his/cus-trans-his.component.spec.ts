import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusTransHisComponent } from './cus-trans-his.component';

describe('CusTransHisComponent', () => {
  let component: CusTransHisComponent;
  let fixture: ComponentFixture<CusTransHisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusTransHisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusTransHisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
