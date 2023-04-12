import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWtfComponent } from './ngx-wtf.component';

describe('NgxWtfComponent', () => {
  let component: NgxWtfComponent;
  let fixture: ComponentFixture<NgxWtfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxWtfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxWtfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
