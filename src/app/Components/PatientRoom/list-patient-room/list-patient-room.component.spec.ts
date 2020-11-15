import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPatientRoomComponent } from './list-patient-room.component';

describe('ListPatientRoomComponent', () => {
  let component: ListPatientRoomComponent;
  let fixture: ComponentFixture<ListPatientRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPatientRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPatientRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
