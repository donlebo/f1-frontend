import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpDialogComponent } from './exp-dialog.component';

describe('ExpDialogComponent', () => {
  let component: ExpDialogComponent;
  let fixture: ComponentFixture<ExpDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
