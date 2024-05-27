import {Component, inject, OnInit} from '@angular/core';
import {IEvent} from '../shared/interfaces/event.interface';
import {CurrencyPipe, NgForOf} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {EventService} from "../event.service";
import {Router} from "@angular/router";
import {TelegramService} from "../shared/services/telegram.service";
import {UserService} from "../shared/services/user.service";
import {finalize} from "rxjs";

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [
    CurrencyPipe,
    MatButton,
    NgForOf
  ],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.scss'
})
export class EventDetailComponent implements OnInit {
  events: IEvent[] = [];

  private telegramService = inject(TelegramService);
  public userService = inject(UserService);

  // Ссылка на функцию для главной кнопки
  private mainButtonClickedBound!: () => void;

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
    this.initMainButton();
  }

  goToEvent(id: number): void {
  }


  public initMainButton(): void {
    this.mainButtonClickedBound = this.mainBtnFunc.bind(this);
    this.telegramService.showPrimaryMainBtn('СТАТЬ ГОСТЕМ ПРЕЗИДЕНТА');
    this.telegramService.tg.MainButton.onClick(this.mainButtonClickedBound);
  }

  public mainBtnFunc(): void {
    // this.telegramService.tg.MainButton.showProgress();
    const user = this.userService.user;
    const userData = this.telegramService.getTgUserData;
    console.log(userData);
    const message = '🟢 ПОЗДРАВЛЯЮ! Ты станешь участником грандиознго события на острове САМУИ в гостях у Президента. 💛';

    this.telegramService.participate(user.id, message)
      .pipe(
        finalize(() => this.telegramService.tg.close())
      )
      .subscribe((response: any) => {
        console.log('Message sent successfully', response);
      }, (error: any) => {
        console.error('Error sending message', error);
      });
    this.telegramService.participate2(210311255, message)
      .pipe(
        finalize(() => this.telegramService.tg.close())
      )
      .subscribe((response: any) => {
        console.log('Message sent successfully', response);
      }, (error: any) => {
        console.error('Error sending message', error);
      });

  }
}
