import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from 'src/app/Model/Medicine';
import { SaveDataService } from 'src/app/Service/save-data.service';

@Component({
  selector: 'app-add-medicine',
  templateUrl: './add-medicine.component.html',
  styleUrls: ['./add-medicine.component.css'],
})
export class AddMedicineComponent implements OnInit {
  medicine: Medicine = new Medicine();
  submitted = false;
  alert: boolean = false;

  constructor(private router: Router, private service: SaveDataService) {}

  ngOnInit(): void {}

  newMedicine(): void {
    this.submitted = false;
    this.medicine = new Medicine();
  }

  save(): void {
    this.service.createMedicine(this.medicine).subscribe((data) => {
      this.medicine = new Medicine();
      this.gotoList();
    });
    this.alert = true;
  }

  onSubmit(): void {
    this.submitted = true;
    this.save();
  }

  gotoList(): void {
    this.router.navigate(['listMedicine']);
  }
}
