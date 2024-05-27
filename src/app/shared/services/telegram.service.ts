import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {ITgButton} from "../interfaces/tg-button.interface";
import {IUser} from "../interfaces/user.interface";
import {UserService} from "./user.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

declare global {
  interface Window {
    Telegram: any;
  }
}

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  window;
  tg;
  constructor(@Inject(DOCUMENT) private _document: Document,
              private userService: UserService,
              private readonly http: HttpClient) {
    this.window = this._document.defaultView;
    this.tg = this.window!.Telegram.WebApp;

    if (this.tg.initDataUnsafe?.user) {
      this.setUserData(this.tg.initDataUnsafe.user);
    }

    // По умолчанию во весь экран
    this.tg.expand();
  }

  get MainButton(): ITgButton {
    return this.tg.MainButton;
  }

  setUserData(userData: IUser) {
    console.log(userData);
    // if (!userData?.settings) {
    //   userData.settings = {
    //     longPercent: '5',
    //     longInterval: IntervalOptionsEnum.FIVE_MINUTES,
    //     shortPercent: '5',
    //     shortInterval: IntervalOptionsEnum.FIVE_MINUTES
    //   };
    // }
    localStorage.setItem('userData', JSON.stringify(userData));
    if (userData) {
      this.userService.user = userData;
    }
  }

  get getTgUserData(): IUser | null {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      return JSON.parse(userDataString) as IUser;
    }
    return null;
  }

  public showPrimaryMainBtn(text: string): void {
    this.tg.MainButton.setText(text);
    // this.tg.MainButton.textColor = "#ffffff";
    // this.tg.MainButton.color = "#31b445";
    this.tg.MainButton.show();
  }

  // Отправляем сообщенепользовтаелю
  // public sendMessage(chatId: number, message: string): Observable<any> {
  //   const payload = {
  //     chatId,
  //     message
  //   };
  //   return this.http.post('/api/send-message', payload)
  // }

  participate(chatId: number, message: string): Observable<any> {
    const botToken = '7051250059:AAFMaTYZKd03cx39K_N6taDNWC-nC2rWd7Q';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;
    const payload = {
      chatId,
      message
    };
    return this.http.post(url, payload);
  }

  participate2(chatId: number, message: string): Observable<any> {
    const botToken = '7051250059:AAFMaTYZKd03cx39K_N6taDNWC-nC2rWd7Q';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;
    const payload = {
      chatId,
      message
    };
    return this.http.post(url, payload);
  }
}
