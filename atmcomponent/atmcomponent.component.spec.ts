import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmcomponentComponent } from './atmcomponent.component';

describe('AtmcomponentComponent', () => {
  let component: AtmcomponentComponent;
  let fixture: ComponentFixture<AtmcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
