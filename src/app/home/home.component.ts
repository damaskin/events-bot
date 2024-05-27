import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {EventService} from "../event.service";
import {Router} from "@angular/router";
import {IEvent} from "../shared/interfaces/event.interface";
import {HeaderComponent} from "../header/header.component";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    HeaderComponent,
    MatButton
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  events: IEvent[] = [];

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  goToEvent(id: number): void {
    this.router.navigate(['/event', id]);
  }
}
