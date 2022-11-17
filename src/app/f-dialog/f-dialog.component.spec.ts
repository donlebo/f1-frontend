import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FDialogComponent } from './f-dialog.component';

describe('FDialogComponent', () => {
  let component: FDialogComponent;
  let fixture: ComponentFixture<FDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
