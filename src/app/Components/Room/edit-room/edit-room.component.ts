import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Room } from 'src/app/Model/Room';
import { DataService } from 'src/app/Service/data.service';
import { UpdateServiceService } from 'src/app/Service/update-service.service';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css'],
})
export class EditRoomComponent implements OnInit {
  id: number;
  public room: Room[];
  rooms: Room = new Room();
  alertUpdate: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private roomService: DataService,
    private updateRoomService: UpdateServiceService
  ) {}

  ngOnInit(): void {
    this.roomService
      .getRoom(this.route.snapshot.params.id)
      .subscribe((result) => {
        this.room = result;
      });
  }

  save(): void {
    this.updateRoomService.updateRoom(this.room).subscribe((data) => {
      this.gotoList();
    });
    this.alertUpdate = true;
  }

  onSubmit(): void {
    this.save();
  }

  gotoList(): void {
    this.router.navigate(['listRoom']);
  }
}
