import { Component, OnInit } from '@angular/core';
import {HotelListComponent} from '../hotel-list/hotel-list.component';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.scss']
})





export class HotelInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
