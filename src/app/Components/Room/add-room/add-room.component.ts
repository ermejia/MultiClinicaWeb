import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientRoom } from 'src/app/Model/PatientRoom';
import { Room } from 'src/app/Model/Room';
import { DataService } from 'src/app/Service/data.service';
import { SaveDataService } from 'src/app/Service/save-data.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css'],
})
export class AddRoomComponent implements OnInit {
  room: Room = new Room();
  submitted = false;
  alert: boolean = false;

  constructor(private router: Router, private service: SaveDataService) {}

  ngOnInit(): void {}

  newRoom(): void {
    this.submitted = false;
    this.room = new Room();
  }

  save(): void {
    this.service.createRoom(this.room).subscribe((data) => {
      this.room = new Room();
      this.gotoList();
    });
    this.alert = true;
  }

  onSubmit(): void {
    this.submitted = true;
    this.save();
  }

  gotoList(): void {
    this.router.navigate(['listRoom']);
  }
}
