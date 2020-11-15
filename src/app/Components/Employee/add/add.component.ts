import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/Model/Employee';
import { Job } from 'src/app/Model/Job';
import { DataService } from 'src/app/Service/data.service';
import { SaveDataService } from 'src/app/Service/save-data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  employee: Employee = new Employee();
  submitted = false;
  jobs: Observable<Job[]>;
  alert: boolean = false;

  constructor(
    private router: Router,
    private service: SaveDataService,
    private jobService: DataService
  ) {}

  ngOnInit(): void {
    this.getJob();
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  getJob(): void {
    this.jobs = this.jobService.getJob();
  }

  save(): void {
    this.service.createEmployee(this.employee).subscribe((data) => {
      this.employee = new Employee();
      this.gotoList();
    });
    this.alert = true;
  }

  onSubmit(): void {
    this.submitted = true;
    this.save();
  }

  gotoList(): void {
    this.router.navigate(['list']);
  }
}
