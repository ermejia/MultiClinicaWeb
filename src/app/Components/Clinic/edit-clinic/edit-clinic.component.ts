import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Clinic } from 'src/app/Model/Clinic';
import { DataService } from 'src/app/Service/data.service';
import { DeleteService } from 'src/app/Service/delete.service';
import { UpdateServiceService } from 'src/app/Service/update-service.service';

@Component({
  selector: 'app-edit-clinic',
  templateUrl: './edit-clinic.component.html',
  styleUrls: ['./edit-clinic.component.css'],
})
export class EditClinicComponent implements OnInit {
  id: number;
  public clinic: Clinic[];
  clinics: Clinic = new Clinic();
  alertUpdate: boolean = false;
  alertDelete: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private clinicService: DataService,
    private updateClinic: UpdateServiceService,
    private deleteService: DeleteService
  ) {}

  ngOnInit(): void {
    this.clinicService
      .getClinic(this.route.snapshot.params.id)
      .subscribe((result) => {
        this.clinic = result;
      });
  }

  save(): void {
    this.updateClinic.updateClinic(this.clinic).subscribe((data) => {
      this.gotoList();
    });
    this.alertUpdate = true;
  }

  onSubmit(): void {
    this.save();
  }

  deleteClinics(): void {
    this.deleteService.deleteClinic(this.clinic).subscribe((data) => {
      this.gotoList();
    });
    this.alertDelete = true;
  }

  gotoList(): void {
    this.router.navigate(['listClinics']);
  }
}
