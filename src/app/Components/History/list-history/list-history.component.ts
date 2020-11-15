import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/Model/Patient';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-list-history',
  templateUrl: './list-history.component.html',
  styleUrls: ['./list-history.component.css'],
})
export class ListHistoryComponent implements OnInit {
  patients: Observable<Patient[]>;

  constructor(private service: DataService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.patients = this.service.getPatients();
  }

  historyPatient(dpi: number): void {
    this.router.navigate(['history', dpi]);
  }
}
