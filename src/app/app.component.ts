import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'MultiClinicaWeb';

  constructor(private router: Router) {}

  List(): void {
    this.router.navigate(['list']);
  }
  ListDoctor(): void {
    this.router.navigate(['listDoctors']);
  }
  ListPatient(): void {
    this.router.navigate(['listPatient']);
  }
  ListClinic(): void {
    this.router.navigate(['listClinics']);
  }
  ListMedicine(): void {
    this.router.navigate(['listMedicine']);
  }
  ListRoom(): void {
    this.router.navigate(['listRoom']);
  }
  ListPatientRoom(): void {
    this.router.navigate(['listPatientRoom']);
  }
  ListAppointment(): void {
    this.router.navigate(['listAppointments']);
  }
  History(): void {
    this.router.navigate(['history-patient']);
  }
  Diagnostic(): void {
    this.router.navigate(['addDiagnostic']);
  }
  Appointment(): void {
    this.router.navigate(['add-appoint']);
  }
}
