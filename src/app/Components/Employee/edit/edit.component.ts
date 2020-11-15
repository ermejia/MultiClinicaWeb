import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/Model/Employee';
import { Job } from 'src/app/Model/Job';
import { DataService } from 'src/app/Service/data.service';
import { DeleteService } from 'src/app/Service/delete.service';
import { UpdateServiceService } from 'src/app/Service/update-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  id: number;
  public employee: Employee[];
  employees: Employee = new Employee();
  jobs: Observable<Job[]>;
  alertUpdate: boolean = false;
  alertDelete: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: DataService,
    private updateEmployee: UpdateServiceService,
    private deleteService: DeleteService
  ) {}

  ngOnInit(): void {
    this.employeeService
      .getEmployee(this.route.snapshot.params.id)
      .subscribe((result) => {
        this.employee = result;
      });

    this.getJob();
  }

  getJob(): void {
    this.jobs = this.employeeService.getJob();
  }

  save(): void {
    this.updateEmployee.updateEmployee(this.employee).subscribe((data) => {
      this.gotoList();
    }),
      (this.alertUpdate = true);
  }

  onSubmit(): void {
    this.save();
  }

  deleteEmployees(): void {
    this.deleteService.deleteEmployee(this.employee).subscribe((data) => {
      this.gotoList();
    });
    this.alertDelete = true;
  }

  gotoList(): void {
    this.router.navigate(['list']);
  }
}
