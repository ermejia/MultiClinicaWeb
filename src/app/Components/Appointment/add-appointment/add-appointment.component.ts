import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Appoint } from 'src/app/Model/Appoint';
import { Clinic } from 'src/app/Model/Clinic';
import { DataService } from 'src/app/Service/data.service';
import { SaveDataService } from 'src/app/Service/save-data.service';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css'],
})
export class AddAppointmentComponent implements OnInit {
  appoint: Appoint = new Appoint();
  submitted = false;
  clinics: Observable<Clinic[]>;
  alert: boolean = false;

  constructor(
    private router: Router,
    private service: SaveDataService,
    private clinicService: DataService
  ) {}

  ngOnInit(): void {
    this.getClinic();
  }

  getClinic(): void {
    this.clinics = this.clinicService.getClinics();
  }

  newAppoint(): void {
    this.submitted = false;
    this.appoint = new Appoint();
  }

  save(): void {
    this.service.createAppoint(this.appoint).subscribe((data) => {
      this.appoint = new Appoint();
      this.gotoLogin();
    });
    this.alert = true;
  }

  onSubmit(): void {
    this.submitted = true;
    this.save();
  }

  gotoList(): void {
    this.router.navigate(['listAppointments']);
  }
  gotoLogin(): void {
    this.router.navigate(['']);
  }
}
