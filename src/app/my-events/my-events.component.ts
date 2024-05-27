import {Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import {IEvent} from "../shared/interfaces/event.interface";
import {EventService} from "../event.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-events',
  standalone: true,
    imports: [
        MatButton,
        NgForOf
    ],
  templateUrl: './my-events.component.html',
  styleUrl: './my-events.component.scss'
})
export class MyEventsComponent implements OnInit {
  events: IEvent[] = [];

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  goToEvent(id: number): void {
    // this.router.navigate(['/event', id]);
  }
}
