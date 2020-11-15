import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Clinic } from 'src/app/Model/Clinic';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-list-clinic',
  templateUrl: './list-clinic.component.html',
  styleUrls: ['./list-clinic.component.css'],
})
export class ListClinicComponent implements OnInit {
  clinics: Observable<Clinic[]>;

  constructor(private service: DataService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.clinics = this.service.getClinics();
  }

  AddClinic(): void {
    this.router.navigate(['add-clinic']);
  }

  EditClinic(id: number): void {
    this.router.navigate(['edit-clinic', id]);
  }
}
