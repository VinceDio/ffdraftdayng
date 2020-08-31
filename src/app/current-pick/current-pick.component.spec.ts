import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentPickComponent } from './current-pick.component';

describe('CurrentPickComponent', () => {
  let component: CurrentPickComponent;
  let fixture: ComponentFixture<CurrentPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentPickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
