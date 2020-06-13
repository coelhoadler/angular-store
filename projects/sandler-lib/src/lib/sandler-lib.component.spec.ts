import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandlerLibComponent } from './sandler-lib.component';

describe('SandlerLibComponent', () => {
  let component: SandlerLibComponent;
  let fixture: ComponentFixture<SandlerLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandlerLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandlerLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
