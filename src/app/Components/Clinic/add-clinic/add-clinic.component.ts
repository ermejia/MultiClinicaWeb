import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clinic } from 'src/app/Model/Clinic';
import { SaveDataService } from 'src/app/Service/save-data.service';

@Component({
  selector: 'app-add-clinic',
  templateUrl: './add-clinic.component.html',
  styleUrls: ['./add-clinic.component.css'],
})
export class AddClinicComponent implements OnInit {
  clinic: Clinic = new Clinic();
  submitted = false;
  alert: boolean = false;

  constructor(private router: Router, private service: SaveDataService) {}

  ngOnInit(): void {}

  newClinic(): void {
    this.submitted = false;
    this.clinic = new Clinic();
  }

  save(): void {
    this.service.createClinic(this.clinic).subscribe((data) => {
      this.clinic = new Clinic();
      this.gotoList();
    });
    this.alert = true;
  }

  onSubmit(): void {
    this.submitted = true;
    this.save();
  }

  gotoList(): void {
    this.router.navigate(['listClinics']);
  }
}
