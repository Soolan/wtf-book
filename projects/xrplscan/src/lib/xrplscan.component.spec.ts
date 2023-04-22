import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XrplscanComponent } from './xrplscan.component';

describe('XrplscanComponent', () => {
  let component: XrplscanComponent;
  let fixture: ComponentFixture<XrplscanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XrplscanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XrplscanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
