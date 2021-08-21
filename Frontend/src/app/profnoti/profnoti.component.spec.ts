import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfnotiComponent } from './profnoti.component';

describe('ProfnotiComponent', () => {
  let component: ProfnotiComponent;
  let fixture: ComponentFixture<ProfnotiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfnotiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfnotiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
