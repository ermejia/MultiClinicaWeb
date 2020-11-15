import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appoint } from 'src/app/Model/Appoint';
import { History } from 'src/app/Model/History';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-history-patient',
  templateUrl: './history-patient.component.html',
  styleUrls: ['./history-patient.component.css'],
})
export class HistoryPatientComponent implements OnInit {
  dpi: number;
  public history: History[];
  public appoint: Appoint[];
  histories: History = new History();

  constructor(
    private route: ActivatedRoute,
    private patientService: DataService
  ) {}

  ngOnInit(): void {
    this.patientService
      .getHistory(this.route.snapshot.params.dpi)
      .subscribe((result) => {
        this.history = result;
      });
  }
}
