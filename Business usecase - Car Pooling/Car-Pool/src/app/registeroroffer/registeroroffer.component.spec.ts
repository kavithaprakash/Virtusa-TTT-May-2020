import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterorofferComponent } from './registeroroffer.component';

describe('RegisterorofferComponent', () => {
  let component: RegisterorofferComponent;
  let fixture: ComponentFixture<RegisterorofferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterorofferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterorofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
