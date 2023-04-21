import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxXrplscanComponent } from './ngx-xrplscan.component';

describe('NgxXrplscanComponent', () => {
  let component: NgxXrplscanComponent;
  let fixture: ComponentFixture<NgxXrplscanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxXrplscanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxXrplscanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
