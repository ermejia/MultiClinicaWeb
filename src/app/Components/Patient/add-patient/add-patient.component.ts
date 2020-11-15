import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/Model/Patient';
import { SaveDataService } from 'src/app/Service/save-data.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
})
export class AddPatientComponent implements OnInit {
  patient: Patient = new Patient();
  submitted = false;
  alert: boolean = false;

  constructor(private router: Router, private service: SaveDataService) {}

  ngOnInit(): void {}

  newPatient(): void {
    this.submitted = false;
    this.patient = new Patient();
  }

  save(): void {
    this.service.createPatient(this.patient).subscribe((data) => {
      this.patient = new Patient();
      this.gotoList();
    });
    this.alert = true;
  }

  onSubmit(): void {
    this.submitted = true;
    this.save();
  }

  gotoList(): void {
    this.router.navigate(['listPatient']);
  }
}
