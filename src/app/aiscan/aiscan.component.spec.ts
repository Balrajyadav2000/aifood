import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiscanComponent } from './aiscan.component';

describe('AiscanComponent', () => {
  let component: AiscanComponent;
  let fixture: ComponentFixture<AiscanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiscanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiscanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
