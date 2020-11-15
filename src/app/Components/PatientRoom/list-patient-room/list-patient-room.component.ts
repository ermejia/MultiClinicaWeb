import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PatientRoom } from 'src/app/Model/PatientRoom';
import { DataService } from '../../../Service/data.service';

@Component({
  selector: 'app-list-patient-room',
  templateUrl: './list-patient-room.component.html',
  styleUrls: ['./list-patient-room.component.css'],
})
export class ListPatientRoomComponent implements OnInit {
  patientRooms: Observable<PatientRoom[]>;

  constructor(private service: DataService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.patientRooms = this.service.getPatientRooms();
  }

  AddPatientRoom(): void {
    this.router.navigate(['add-patient-room']);
  }

  EditPatientRoom(id: number): void {
    this.router.navigate(['edit-patient-room', id]);
  }
}
