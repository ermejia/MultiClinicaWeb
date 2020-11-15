import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPatientRoomComponent } from './edit-patient-room.component';

describe('EditPatientRoomComponent', () => {
  let component: EditPatientRoomComponent;
  let fixture: ComponentFixture<EditPatientRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPatientRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPatientRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
