/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MinesweepComponent } from './minesweep.component';

describe('MinesweepComponent', () => {
  let component: MinesweepComponent;
  let fixture: ComponentFixture<MinesweepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinesweepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinesweepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
