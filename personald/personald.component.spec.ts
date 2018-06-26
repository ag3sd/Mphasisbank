import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaldComponent } from './personald.component';

describe('PersonaldComponent', () => {
  let component: PersonaldComponent;
  let fixture: ComponentFixture<PersonaldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonaldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
