// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyEventsComponent } from './my-events/my-events.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'my-events', component: MyEventsComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'event/:id', component: EventDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
