import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Appoint } from 'src/app/Model/Appoint';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-list-appintment',
  templateUrl: './list-appintment.component.html',
  styleUrls: ['./list-appintment.component.css'],
})
export class ListAppintmentComponent implements OnInit {
  appointments: Observable<Appoint[]>;

  constructor(private service: DataService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.appointments = this.service.getAppoints();
  }

  AddAppoint(): void {
    this.router.navigate(['add-appoint']);
  }

  EditAppoint(id: number): void {
    this.router.navigate(['edit-appoint', id]);
  }
}
