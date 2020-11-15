import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../Service/data.service';
import { Room } from 'src/app/Model/Room';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.css'],
})
export class ListRoomComponent implements OnInit {
  rooms: Observable<Room[]>;

  constructor(private service: DataService, private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.rooms = this.service.getRooms();
  }

  AddRoom(): void {
    this.router.navigate(['add-room']);
  }

  EditRoom(id: number): void {
    this.router.navigate(['edit-room', id]);
  }
}
