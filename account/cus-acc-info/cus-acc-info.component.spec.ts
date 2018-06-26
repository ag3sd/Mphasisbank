import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusAccInfoComponent } from './cus-acc-info.component';

describe('CusAccInfoComponent', () => {
  let component: CusAccInfoComponent;
  let fixture: ComponentFixture<CusAccInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusAccInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusAccInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
