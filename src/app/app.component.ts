import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatListItem, MatNavList} from "@angular/material/list";
import {TelegramService} from "./shared/services/telegram.service";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MatSidenavContainer, MatIcon, MatToolbar, MatIconButton, MatSidenavContent, MatNavList, MatListItem, RouterLink, MatSidenav, JsonPipe, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  @ViewChild('sidenav') sidenav!: MatSidenav;
  telegramService = inject(TelegramService)
  title = 'events-bot';
  user!: any;

  toggleSidenav() {
    this.sidenav.toggle();
  }
  closeSidenav() {
    this.sidenav.close();
  }

  ngOnInit(): void {
    this.user = this.telegramService.getTgUserData;
    console.log(this.user);
  }
}
