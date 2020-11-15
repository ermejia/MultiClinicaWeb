import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/Model/Doctor';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.css'],
})
export class ListDoctorsComponent implements OnInit {
  doctors: Observable<Doctor[]>;

  constructor(private service: DataService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.doctors = this.service.getDoctors();
  }
}
