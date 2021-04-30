import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  // hotel: string;
  // response: any = [];
  // GEO_HOTELS_API = 'assets/fakeBackEnd/geoHotels.json';


  // getHotel(): void{
  //   this.http.get(this.GEO_HOTELS_API).subscribe(response => {
  //     this.response = response;
  //     console.log(this.response.georgianHotels);
  //   });
  // }


  ngOnInit(): void {


  }

}
