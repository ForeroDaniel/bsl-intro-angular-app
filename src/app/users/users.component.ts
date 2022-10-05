import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
img = 'https://thecatapi.com/api/images/get?format=src&type=gif'

  constructor() { }

  ngOnInit(): void {
  }

}
