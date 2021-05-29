import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMedicationComponent } from './list-medication.component';

describe('ListMedicationComponent', () => {
  let component: ListMedicationComponent;
  let fixture: ComponentFixture<ListMedicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMedicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
