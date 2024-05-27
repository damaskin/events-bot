import { Injectable } from '@angular/core';
import {IEvent} from './shared/interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})
@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: IEvent[] = [
    {
      id: 1,
      title: 'Event 1',
      date: '2024-06-01',
      description: 'Description for Event 1',
      imageUrl: 'https://example.com/event1.jpg',
      address: '123 Main St',
      price: 100,
      mapUrl: 'https://maps.google.com/?q=123+Main+St'
    },
    // Add more events here
  ];

  getEvents(): IEvent[] {
    return this.events;
  }

  getEventById(id: number): IEvent {
    return this.events.find(event => event.id === id)!;
  }
}
