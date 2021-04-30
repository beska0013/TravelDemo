import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() {}

  users = [
    {
      id: 0,
      hotel: false,
      systemManager: false,
      guest: true,
      userName: 'user',
      password: 'user',
      netStatus: false,
    },
    {
      id: 1,
      hotel: false,
      systemManager: true,
      guest: false,
      userName: 'admin',
      password: 'admin',
      netStatus: false,
    },
    {
      id: 2,
      hotel: true,
      systemManager: false,
      guest: false,
      userName: 'hotel',
      password: 'hotel',
      netStatus: false,
    },
  ];

  ngOnInit(): void {

  }

}
