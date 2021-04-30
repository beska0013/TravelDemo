import { Component, OnInit } from '@angular/core';

import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent implements OnInit {

  constructor(private http: HttpClient) { }
  roomsImages: any = [];
  block: any;
  id: any;
  geoHotels: any = [];
  hotels: any = [];
  response: any = [];
  index: string;
  GEO_HOTELS_API = 'assets/fakeBackEnd/geoHotels.json';



  getHotel(): void{
    this.http.get(this.GEO_HOTELS_API).subscribe(response => {
      this.response = response;

    });
  }

  infoShow(): void {
    const hotelScrollList = document.getElementById('hotelScrollList');
    const hotelPage = document.getElementById('hotelInfoPage');
    hotelScrollList.style.display = 'none';
    hotelPage.style.display = 'block';
    const hotelListContent = document.getElementById('hotelListContent');
  }




  getInfo(e): void{
    this.block =  (event.currentTarget);
    // console.log(this.block.id);
    this.id = this.block.id;
    const hotelImage = document.getElementById('hotelImage');
    const headerTitle = document.getElementById('headerTitle');
    const cityName = document.getElementById('cityHeader');
    const districtName = document.getElementById('distHeader');
    const addressName = document.getElementById('addressHeader');
    const infoText = document.getElementById('infoHeader');
    const starsNumber = document.getElementById('starsNumber');
    const numberOfRooms = document.getElementById('rommsnumber');
    const roomsType = document.getElementById('rommstype');
    const premiumRoom = document.getElementById('premiumRoom');
    const standartRoom = document.getElementById('standartRoom');
    // console.log( addressName.innerHTML);
    // console.log(this.response.geohotels[0]);




    this.response.geohotels.forEach( hotel => {
      // console.log(this.response.geohotels[this.id].info);
      hotelImage.attributes[2].value = this.response.geohotels[this.id].image;
      headerTitle.innerHTML = this.response.geohotels[this.id].hotel_name;
      addressName.innerHTML = this.response.geohotels[this.id].address;
      districtName.innerHTML = this.response.geohotels[this.id].district_name;
      cityName.innerHTML = this.response.geohotels[this.id].city_name;
      infoText.innerHTML = this.response.geohotels[this.id].info;
      starsNumber.innerHTML = this.response.geohotels[this.id].stars;
      numberOfRooms.innerHTML = this.response.geohotels[this.id].number_of_rooms;
      roomsType.innerHTML = this.response.geohotels[this.id].type;
      premiumRoom.innerHTML = this.response.geohotels[this.id].rooms.premium_room.room_icon;
      standartRoom.innerHTML = this.response.geohotels[this.id].rooms.standard_room.room_icon;

      // console.log(this.response.geohotels[this.id].rooms.premium_room.images);
      const premiumroomsimages = this.response.geohotels[this.id].rooms.premium_room.images;
      const standartRoomsImages = this.response.geohotels[this.id].rooms.standard_room.images;
      premiumroomsimages.forEach( img => {
        // console.log(img);
        this.roomsImages.push(img);
      });
      // console.log(this.roomsImages);

    });
  }



  ngOnInit(): void {
    this.getHotel();


  }
}
