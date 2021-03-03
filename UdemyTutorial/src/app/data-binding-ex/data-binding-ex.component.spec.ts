import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingExComponent } from './data-binding-ex.component';

describe('DataBindingExComponent', () => {
  let component: DataBindingExComponent;
  let fixture: ComponentFixture<DataBindingExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
