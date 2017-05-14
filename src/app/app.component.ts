import {Component, OnInit} from '@angular/core';

import { CounterService } from './counter.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent implements OnInit {
  activeUsers: string[] = [];
  activeCount: number = 0; // tslint:disable-line:no-inferrable-types

  inactiveUsers: string[] = [];
  inactiveCount: number = 0; // tslint:disable-line:no-inferrable-types

  constructor(private counterService: CounterService, private usersService: UsersService) {}

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
    this.activeCount = this.counterService.activeCount;

    this.inactiveUsers = this.usersService.inactiveUsers;
    this.inactiveCount = this.counterService.inactiveCount;
  }
}
