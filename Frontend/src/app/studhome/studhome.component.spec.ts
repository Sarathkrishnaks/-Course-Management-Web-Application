import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudhomeComponent } from './studhome.component';

describe('StudhomeComponent', () => {
  let component: StudhomeComponent;
  let fixture: ComponentFixture<StudhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
