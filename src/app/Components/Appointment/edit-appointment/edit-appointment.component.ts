import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Appoint } from 'src/app/Model/Appoint';
import { Clinic } from 'src/app/Model/Clinic';
import { DataService } from 'src/app/Service/data.service';
import { UpdateServiceService } from 'src/app/Service/update-service.service';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css'],
})
export class EditAppointmentComponent implements OnInit {
  id: number;
  public appoint: Appoint[];
  appoints: Appoint = new Appoint();
  clinics: Observable<Clinic[]>;
  alertUpdate: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private appointService: DataService,
    private updateAppoint: UpdateServiceService
  ) {}

  ngOnInit(): void {
    this.appointService
      .getAppoint(this.route.snapshot.params.id)
      .subscribe((result) => {
        this.appoint = result;
      });
    this.getClinic();
  }

  getClinic(): void {
    this.clinics = this.appointService.getClinics();
  }

  save(): void {
    this.updateAppoint.updateAppoint(this.appoint).subscribe((data) => {
      this.gotoList();
    });
    this.alertUpdate = true;
  }

  onSubmit(): void {
    this.save();
  }

  gotoList(): void {
    this.router.navigate(['listAppointments']);
  }
}
