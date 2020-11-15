import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPatientRoomComponent } from './add-patient-room.component';

describe('AddPatientRoomComponent', () => {
  let component: AddPatientRoomComponent;
  let fixture: ComponentFixture<AddPatientRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPatientRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPatientRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
