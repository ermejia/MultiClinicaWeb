import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from 'src/app/Model/Medicine';
import { DataService } from 'src/app/Service/data.service';
import { DeleteService } from 'src/app/Service/delete.service';
import { UpdateServiceService } from 'src/app/Service/update-service.service';

@Component({
  selector: 'app-edit-medicine',
  templateUrl: './edit-medicine.component.html',
  styleUrls: ['./edit-medicine.component.css'],
})
export class EditMedicineComponent implements OnInit {
  id: number;
  public medicine: Medicine[];
  alertUpdate: boolean = false;
  alertDelete: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private medicineService: DataService,
    private updateMedicine: UpdateServiceService,
    private deleteService: DeleteService
  ) {}

  ngOnInit(): void {
    this.medicineService
      .getMedicine(this.route.snapshot.params.id)
      .subscribe((result) => {
        this.medicine = result;
      });
  }

  save(): void {
    this.updateMedicine.updateMedicine(this.medicine).subscribe((data) => {
      this.gotoList();
    });
    this.alertUpdate = true;
  }

  onSubmit(): void {
    this.save();
  }

  deleteMedicine(): void {
    this.deleteService.deleteMedicine(this.medicine).subscribe((data) => {
      this.gotoList();
    });
    this.alertDelete = true;
  }

  gotoList(): void {
    this.router.navigate(['listMedicine']);
  }
}
