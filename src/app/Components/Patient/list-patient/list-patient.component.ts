import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/Model/Patient';
import { DataService } from '../../../Service/data.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.css'],
})
export class ListPatientComponent implements OnInit {
  patients: Observable<Patient[]>;

  constructor(private service: DataService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.patients = this.service.getPatients();
  }

  AddPatient(): void {
    this.router.navigate(['add-patient']);
  }

  EditPatient(id: number): void {
    this.router.navigate(['edit-patient', id]);
  }
}
