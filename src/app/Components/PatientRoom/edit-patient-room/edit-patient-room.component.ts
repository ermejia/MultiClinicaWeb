import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PatientRoom } from 'src/app/Model/PatientRoom';
import { Room } from 'src/app/Model/Room';
import { DataService } from 'src/app/Service/data.service';
import { UpdateServiceService } from 'src/app/Service/update-service.service';

@Component({
  selector: 'app-edit-patient-room',
  templateUrl: './edit-patient-room.component.html',
  styleUrls: ['./edit-patient-room.component.css'],
})
export class EditPatientRoomComponent implements OnInit {
  id: number;
  rooms: Observable<Room[]>;
  public patientRoom: PatientRoom[];
  patientRooms: PatientRoom = new PatientRoom();
  alertUpdate: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private patientRoomService: DataService,
    private updatePatientRoom: UpdateServiceService
  ) {}

  getRooms(): void {
    this.rooms = this.patientRoomService.getRooms();
  }

  ngOnInit(): void {
    this.patientRoomService
      .getPatientRoom(this.route.snapshot.params.id)
      .subscribe((result) => {
        this.patientRoom = result;
      });
    this.getRooms();
  }

  save(): void {
    this.updatePatientRoom.updatePatient(this.patientRoom).subscribe((data) => {
      this.gotoList();
    });
    this.alertUpdate = true;
  }

  onSubmit(): void {
    this.save();
  }

  gotoList(): void {
    this.router.navigate(['listPatientRoom']);
  }
}
