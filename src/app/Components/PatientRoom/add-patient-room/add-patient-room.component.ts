import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PatientRoom } from 'src/app/Model/PatientRoom';
import { Room } from 'src/app/Model/Room';
import { DataService } from 'src/app/Service/data.service';
import { SaveDataService } from 'src/app/Service/save-data.service';

@Component({
  selector: 'app-add-patient-room',
  templateUrl: './add-patient-room.component.html',
  styleUrls: ['./add-patient-room.component.css'],
})
export class AddPatientRoomComponent implements OnInit {
  rooms: Observable<Room[]>;
  patientRoom: PatientRoom = new PatientRoom();
  submitted = false;
  alert: boolean = false;

  constructor(
    private router: Router,
    private service: SaveDataService,
    private roomService: DataService
  ) {}

  ngOnInit(): void {
    this.getRooms();
  }

  newPatientRoom(): void {
    this.submitted = false;
    this.patientRoom = new PatientRoom();
  }

  getRooms(): void {
    this.rooms = this.roomService.getRooms();
  }

  save(): void {
    this.service.createPatientRoom(this.patientRoom).subscribe((data) => {
      this.patientRoom = new PatientRoom();
      this.gotoList();
    });
    this.alert = true;
  }

  onSubmit(): void {
    this.submitted = true;
    this.save();
  }

  gotoList(): void {
    this.router.navigate(['listPatientRoom']);
  }
}
