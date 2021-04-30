import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor( ) {
  }





  geoBgImages = [
    {
      geo_name: 'თბილისი',
      name: 'Tbilisi',
      geo_text: 'ლორემ იპსუმ დოლორ სით ამით, კონსექტეტურ ადიპისიცინგ ელით.' +
        'აკუსანტიუმ ად ალიქუამ ასუმენდა კონსეკტეტურ კონსეკუუნტურ დუციმის' +
        'ექლპედია ჰარუმჰიქ ინვენტორე ლაბორე ლაბორიოსამ მოგნი მინუს ნეშნთ ოდიო სედ სოლუტა ვოლუპტატე,ვოლუპტატიბუს?',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
        '  Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
        '  harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
      images: [
        {
          image: './assets/img/georgiaImages/tbilisi/tbilisi1.jpg'
        },
        {
          image: './assets/img/georgiaImages/tbilisi/tbilisi2.jpg'
        },
        {
          image: './assets/img/georgiaImages/tbilisi/tbilisi3.jpg'
        },
        {
          image: './assets/img/georgiaImages/tbilisi/tbilisi4.jpg'
        }
      ],

    },
    {
      geo_name: 'ბათუმი',
      name: 'Batumi',
      geo_text: 'ლორემ იპსუმ დოლორ სით ამით, კონსექტეტურ ადიპისიცინგ ელით.' +
        'აკუსანტიუმ ად ალიქუამ ასუმენდა კონსეკტეტურ კონსეკუუნტურ დუციმის' +
        'ექლპედია ჰარუმჰიქ ინვენტორე ლაბორე ლაბორიოსამ მოგნი მინუს ნეშნთ ოდიო სედ სოლუტა ვოლუპტატე,ვოლუპტატიბუს?',

      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
        '  Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
        '  harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
      images: [
        {
          image: './assets/img/georgiaImages/batumi/batumi1.jpg'
        },
        {
          image: './assets/img/georgiaImages/batumi/batumi2.jpg'
        },
        {
          image: './assets/img/georgiaImages/batumi/batumi3.jpg'
        },
        {
          image: './assets/img/georgiaImages/batumi/batumi4.jpg'
        }
      ],
    },

    {
      name: 'Kazbegi',
      geo_name: 'ყაზბეგი',
      geo_text: 'ლორემ იპსუმ დოლორ სით ამით, კონსექტეტურ ადიპისიცინგ ელით.' +
        'აკუსანტიუმ ად ალიქუამ ასუმენდა კონსეკტეტურ კონსეკუუნტურ დუციმის' +
        'ექლპედია ჰარუმჰიქ ინვენტორე ლაბორე ლაბორიოსამ მოგნი მინუს ნეშნთ ოდიო სედ სოლუტა ვოლუპტატე,ვოლუპტატიბუს?',

      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
        '  Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
        '  harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
      images: [

        {
          image: './assets/img/georgiaImages/kazbegi/kazbegi1.jpg'
        },
        {
          image: './assets/img/georgiaImages/kazbegi/kazbegi2.jpg'
        },
        {
          image: './assets/img/georgiaImages/kazbegi/kazbegi3.jpg'
        },
        {
          image: './assets/img/georgiaImages/kazbegi/kazbegi4.jpg'
        }
      ],
    },

    {
      geo_name: 'ბორჯომი',
      name: 'Borjomi',
      geo_text: 'ლორემ იპსუმ დოლორ სით ამით, კონსექტეტურ ადიპისიცინგ ელით.' +
        'აკუსანტიუმ ად ალიქუამ ასუმენდა კონსეკტეტურ კონსეკუუნტურ დუციმის' +
        'ექლპედია ჰარუმჰიქ ინვენტორე ლაბორე ლაბორიოსამ მოგნი მინუს ნეშნთ ოდიო სედ სოლუტა ვოლუპტატე,ვოლუპტატიბუს?',

      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
        '  Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
        '  harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
      images: [

        {
          image: './assets/img/georgiaImages/borjomi/borjomi1.jpg'
        },
        {
          image: './assets/img/georgiaImages/borjomi/borjomi2.jpg'
        },
        {
          image: './assets/img/georgiaImages/borjomi/borjomi3.jpg'
        },
        {
          image: './assets/img/georgiaImages/borjomi/borjomi4.jpg'
        }
      ],
    },

    {
      geo_name: 'სვანეთი',
      name: 'Svaneti',
      geo_text: 'ლორემ იპსუმ დოლორ სით ამით, კონსექტეტურ ადიპისიცინგ ელით.' +
        'აკუსანტიუმ ად ალიქუამ ასუმენდა კონსეკტეტურ კონსეკუუნტურ დუციმის' +
        'ექლპედია ჰარუმჰიქ ინვენტორე ლაბორე ლაბორიოსამ მოგნი მინუს ნეშნთ ოდიო სედ სოლუტა ვოლუპტატე,ვოლუპტატიბუს?',

      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
        '  Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
        '  harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
      images: [

        {
          image: './assets/img/georgiaImages/svaneti/svaneti1.jpg'
        },
        {
          image: './assets/img/georgiaImages/svaneti/svaneti2.jpg'
        },
        {
          image: './assets/img/georgiaImages/svaneti/svaneti3.jpg'
        },
        {
          image: './assets/img/georgiaImages/svaneti/svaneti4.jpg'
        }
      ]
    },

    {
      geo_name: 'რაჭა',
      name: 'Racha',
      geo_text: 'ლორემ იპსუმ დოლორ სით ამით, კონსექტეტურ ადიპისიცინგ ელით.' +
        'აკუსანტიუმ ად ალიქუამ ასუმენდა კონსეკტეტურ კონსეკუუნტურ დუციმის' +
        ' ექლპედია ჰარუმჰიქ ინვენტორე ლაბორე ლაბორიოსამ მოგნი მინუს ნეშნთ ოდიო სედ სოლუტა ვოლუპტატე,ვოლუპტატიბუს?',

      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
        '  Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
        '  harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
      images: [
        {
          image: './assets/img/georgiaImages/racha/racha1.jpg'
        },
        {
          image: './assets/img/georgiaImages/racha/racha2.jpg'
        },
        {
          image: './assets/img/georgiaImages/racha/racha3.jpg'
        },
        {
          image: './assets/img/georgiaImages/racha/racha4.jpg'
        },
      ],
    }
  ];

  // georgianHotels = [
  //   {
  //     district: [
  //       {  id: 0,
  //         name: 'Eastern Georgia',
  //         geo_name: 'აღმოსავლეთი საქართველო',
  //         cities: [
  //           {
  //             id: 0,
  //             name: 'Tbilisi',
  //             geo_name: 'თბილისი',
  //             hotels: [
  //               {
  //                 hotel:
  //                   {
  //                     id: 0,
  //                     name: 'Biltmore',
  //                     geo_name: 'Biltmore',
  //                     type: 'Hotel',
  //                     geo_type: 'სასტუმრო',
  //                     address: ' lorem ipsum lorem ipsum lorem ipsum',
  //                     geo_address: 'ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ',
  //                     stars: 5,
  //                     number_of_rooms: 15,
  //                     parking: true,
  //                     pool: true,
  //                     spa: true,
  //                     info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
  //                       'Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
  //                       'harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
  //
  //
  //                     geo_info: 'ლორემ იპსუმ დოლორ სით ამით, კონსექტეტურ ადიპისიცინგ ელით.' +
  //                       'აკუსანტიუმ ად ალიქუამ ასუმენდა კონსეკტეტურ კონსეკუუნტურ დუციმის' +
  //                       'ექლპედია ჰარუმჰიქ ინვენტორე ლაბორე ლაბორიოსამ მოგნი მინუს ნეშნთ ოდიო სედ სოლუტა ვოლუპტატე,ვოლუპტატიბუს?',
  //
  //                     image: '/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/biltmore.jpg',
  //                     rooms:
  //                     {
  //
  //                         standard_room: {
  //                           name: 'standard',
  //                           geo_name: 'სტანდარტული',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         },
  //                       premium_room: {
  //                         name: 'premium',
  //                         geo_name: 'პრემიუმი',
  //                         room_icon: `<i class='bx bx-bed'></i>`,
  //                         images: [
  //                           {
  //                             image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                           },
  //                           {
  //                             image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                           },
  //                           {
  //                             image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                           },
  //                           {
  //                             image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                           },
  //                           {
  //                             image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                           },
  //                           {
  //                             image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                           },
  //                         ]
  //                       }
  //                   },
  //
  //                   },
  //
  //               },
  //               {
  //                 hotel:
  //                   {
  //                     id: 1,
  //                     name: 'Sheraton Metekhi Palace',
  //                     geo_name: 'შერატონ მეტეხი პალასი',
  //                     type: 'Hotel',
  //                     geo_type: 'სასტუმრო',
  //                     address: ' lorem ipsum lorem ipsum lorem ipsum',
  //                     geo_address: 'ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ',
  //                     stars: 4,
  //                     number_of_rooms: 20,
  //                     parking: true,
  //                     pool: true,
  //                     spa: true,
  //                     info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
  //                       'Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
  //                       'harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
  //
  //                     geo_info: 'ლორემ იპსუმ დოლორ სით ამით, კონსექტეტურ ადიპისიცინგ ელით.აკუსანტიუმ ად ალიქუამ ასუმენდა კონსეკტეტურ ' +
  //                       'კონსეკუუნტურ დუციმისექლპედია ჰარუმჰიქ ინვენტორე ლაბორე ლაბორიოსამ მოგნი მინუს ნეშნთ ' +
  //                       'ოდიო სედ სოლუტა ვოლუპტატე,ვოლუპტატიბუს?\n' + '\n',
  //
  //
  //                     image: '/assets/img/georgiaImages/tbilisi/tbilisi_hotels/shraton_hotel/sheraton.jpg',
  //                     rooms:
  //                       {
  //                         standard_room: {
  //                           name: 'standard',
  //                           geo_name: 'სტანდარტული',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         },
  //                         premium_room: {
  //                           name: 'premium',
  //                           geo_name: 'პრემიუმი',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         }
  //                       },
  //                   },
  //
  //               },
  //               {
  //                 hotel:
  //                   {
  //                     id: 2,
  //                     name: 'Stamba',
  //                     geo_name: 'სტამბა',
  //                     type: 'Hotel',
  //                     geo_type: 'სასტუმრო',
  //                     address: ' lorem ipsum lorem ipsum lorem ipsum',
  //                     geo_address: 'ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ',
  //                     stars: 5,
  //                     number_of_rooms: 30,
  //                     parking: true,
  //                     pool: true,
  //                     sapa: true,
  //                     info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
  //                       'Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
  //                       'harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
  //                     image: '/assets/img/georgiaImages/tbilisi/tbilisi_hotels/stamba_hotel/stamba.jpg',
  //                     rooms:
  //                       {
  //                         standard_room: {
  //                           name: 'standard',
  //                           geo_name: 'სტანდარტული',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         },
  //                         premium_room: {
  //                           name: 'premium',
  //                           geo_name: 'პრემიუმი',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         }
  //                       },
  //                   },
  //               },
  //               {
  //                 hotel:
  //                   {
  //                     id: 3,
  //                     name: 'Tbilisi Tower',
  //                     geo_name: 'თბილისი თაუერი',
  //                     type: 'Hotel',
  //                     geo_type: 'სასტუმრო',
  //                     address: ' lorem ipsum lorem ipsum lorem ipsum',
  //                     geo_address: 'ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ',
  //                     stars: 4,
  //                     number_of_rooms: 15,
  //                     parking: true,
  //                     pool: true,
  //                     spa: true,
  //                     info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
  //                       'Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
  //                       'harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
  //                     image: '/assets/img/georgiaImages/tbilisi/tbilisi_hotels/tbilisi_tower_hotel/tbilisi_tower.jpg',
  //                     rooms:
  //                       {
  //                         standard_room: {
  //                           name: 'standard',
  //                           geo_name: 'სტანდარტული',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         },
  //                         premium_room: {
  //                           name: 'premium',
  //                           geo_name: 'პრემიუმი',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         }
  //                       },
  //                   }
  //               },
  //             ]
  //           }
  //         ]
  //       },
  //     ]
  //   },
  //   {
  //     district: [
  //       {
  //         id: 1,
  //         name: 'Adjara',
  //         geo_name: 'აჭარა',
  //         cities: [
  //           {
  //             id: 0,
  //             name: 'Batumi',
  //             geo_name: 'ბათუმი',
  //             hotels: [
  //               {
  //                 hotel:
  //                   {
  //                     id: 0,
  //                     name: 'Golden Palace',
  //                     geo_name: 'Golden Palace',
  //                     type: 'Hotel',
  //                     geo_type: 'სასტუმრო',
  //                     address: ' lorem ipsum lorem ipsum lorem ipsum',
  //                     geo_address: 'ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ',
  //                     stars: 3,
  //                     number_of_rooms: 9,
  //                     parking: true,
  //                     pool: true,
  //                     spa: false,
  //                     info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
  //                       'Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
  //                       'harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
  //                     image: '/assets/img/georgiaImages/batumi/batumi_hotels/golden-palace-hotel/golden_palace.jpg',
  //                     rooms:
  //                       {
  //                         standard_room: {
  //                           name: 'standard',
  //                           geo_name: 'სტანდარტული',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         },
  //                         premium_room: {
  //                           name: 'premium',
  //                           geo_name: 'პრემიუმი',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         }
  //                       },
  //                   }
  //
  //               },
  //               {
  //                 hotel:
  //                   {
  //                     id: 1,
  //                     name: 'Intourist',
  //                     geo_name: 'Intourist',
  //                     type: 'Hotel',
  //                     geo_type: 'სასტუმრო',
  //                     address: ' lorem ipsum lorem ipsum lorem ipsum',
  //                     geo_address: 'ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ',
  //                     stars: 4,
  //                     number_of_rooms: 7,
  //                     parking: true,
  //                     pool: true,
  //                     spa: true,
  //                     info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
  //                       'Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
  //                       'harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
  //                     image: '/assets/img/georgiaImages/batumi/batumi_hotels/intourist_hotel/intourist.jpg',
  //                     rooms:
  //                       {
  //                         standard_room: {
  //                           name: 'standard',
  //                           geo_name: 'სტანდარტული',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         },
  //                         premium_room: {
  //                           name: 'premium',
  //                           geo_name: 'პრემიუმი',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         }
  //                       },
  //                   }
  //
  //               },
  //               {
  //                 hotel:
  //                   {
  //                     id: 2,
  //                     name: 'Radisson Blu ',
  //                     geo_name: 'რედისონ ბლუ',
  //                     type: 'Hotel',
  //                     geo_type: 'სასტუმრო',
  //                     address: ' lorem ipsum lorem ipsum lorem ipsum',
  //                     geo_address: 'ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ',
  //                     stars: 5,
  //                     number_of_rooms: 25,
  //                     parking: true,
  //                     pool: true,
  //                     spa: true,
  //                     info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
  //                       'Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
  //                       'harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
  //                     image: '/assets/img/georgiaImages/batumi/batumi_hotels/radisson_blu_hotel/radisson_blu.jpg',
  //                     rooms:
  //                       {
  //                         standard_room: {
  //                           name: 'standard',
  //                           geo_name: 'სტანდარტული',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         },
  //                         premium_room: {
  //                           name: 'premium',
  //                           geo_name: 'პრემიუმი',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         }
  //                       },
  //                   }
  //
  //               },
  //               {
  //                 hotel:
  //                   {
  //                     id: 3,
  //                     name: 'Sheraton Batumi',
  //                     geo_name: 'შერატონ ბათუმი',
  //                     type: 'Hotel',
  //                     geo_type: 'სასტუმრო',
  //                     address: ' lorem ipsum lorem ipsum lorem ipsum',
  //                     geo_address: 'ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ',
  //                     stars: 4,
  //                     number_of_rooms: 15,
  //                     parking: true,
  //                     pool: true,
  //                     spa: true,
  //                     info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
  //                       'Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
  //                       'harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
  //                     image: '/assets/img/georgiaImages/batumi/batumi_hotels/sheraton_batumi_hotel/sheraton_batumi.jpg',
  //                     rooms:
  //                       {
  //                         standard_room: {
  //                           name: 'standard',
  //                           geo_name: 'სტანდარტული',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         },
  //                         premium_room: {
  //                           name: 'premium',
  //                           geo_name: 'პრემიუმი',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         }
  //                       },
  //                   }
  //
  //               },
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     district: [
  //       {
  //         id: 2,
  //         name: 'Mtskheta-Mtianeti',
  //         geo_name: 'მცხეთა-მთიანეთი',
  //         cities: [
  //           {
  //             id: 0,
  //             name: 'kazbegi',
  //             geo_name: 'ყაზბეგი',
  //             hotels: [
  //               {
  //                 hotel:
  //                   {
  //                     id: 0,
  //                     name: 'Capra',
  //                     geo_name: 'კაპრა',
  //                     type: 'Hotel',
  //                     geo_type: 'სასტუმრო',
  //                     address: ' lorem ipsum lorem ipsum lorem ipsum',
  //                     geo_address: 'ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ',
  //                     stars: 3,
  //                     number_of_rooms: 8,
  //                     parking: true,
  //                     pool: true,
  //                     spa: true,
  //                     info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
  //                       'Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
  //                       'harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
  //                     image: '/assets/img/georgiaImages/kazbegi/kazbegi_hotels/capra_hotel/capra.jpg',
  //                     rooms:
  //                       {
  //                         standard_room: {
  //                           name: 'standard',
  //                           geo_name: 'სტანდარტული',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         },
  //                         premium_room: {
  //                           name: 'premium',
  //                           geo_name: 'პრემიუმი',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         }
  //                       },
  //                   }
  //
  //               },
  //               {
  //                 hotel:
  //                   {
  //                     id: 1,
  //                     name: 'Gold Kazbegi',
  //                     geo_name: 'გოლდ ყაზბეგი',
  //                     type: 'Hotel',
  //                     geo_type: 'სასტუმრო',
  //                     address: ' lorem ipsum lorem ipsum lorem ipsum',
  //                     geo_address: 'ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ',
  //                     stars: 4,
  //                     number_of_rooms: 11,
  //                     parking: true,
  //                     pool: true,
  //                     spa: true,
  //                     info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
  //                       'Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
  //                       'harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
  //                     image: '/assets/img/georgiaImages/kazbegi/kazbegi_hotels/gold_kazbegi/gold_kazbegi.jpg',
  //                     rooms:
  //                       {
  //                         standard_room: {
  //                           name: 'standard',
  //                           geo_name: 'სტანდარტული',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         },
  //                         premium_room: {
  //                           name: 'premium',
  //                           geo_name: 'პრემიუმი',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         }
  //                       },
  //                   }
  //
  //               },
  //               {
  //                 hotel:
  //                   {
  //                     id: 2,
  //                     name: 'Intourist',
  //                     geo_name: 'ინტურისტი',
  //                     type: 'Hotel',
  //                     geo_type: 'სასტუმრო',
  //                     address: ' lorem ipsum lorem ipsum lorem ipsum',
  //                     geo_address: 'ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ',
  //                     stars: 4,
  //                     number_of_rooms: 9,
  //                     parking: true,
  //                     pool: true,
  //                     spa: true,
  //                     info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
  //                       'Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
  //                       'harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
  //                     image: '/assets/img/georgiaImages/kazbegi/kazbegi_hotels/intourist_hotel/intourist_kazbegi.jpg',
  //                     rooms:
  //                       {
  //                         standard_room: {
  //                           name: 'standard',
  //                           geo_name: 'სტანდარტული',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         },
  //                         premium_room: {
  //                           name: 'premium',
  //                           geo_name: 'პრემიუმი',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         }
  //                       },
  //                   }
  //               },
  //               {
  //                 hotel:
  //                   {
  //                     id: 3,
  //                     name: 'Rooms',
  //                     geo_name: 'რუმსი',
  //                     type: 'Hotel',
  //                     geo_type: 'სასტუმრო',
  //                     address: ' lorem ipsum lorem ipsum lorem ipsum',
  //                     geo_address: 'ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ',
  //                     stars: 5,
  //                     number_of_rooms: 15,
  //                     parking: true,
  //                     pool: true,
  //                     spa: true,
  //                     info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
  //                       'Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
  //                       'harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
  //                     image: '/assets/img/georgiaImages/kazbegi/kazbegi_hotels/rooms_kazbegi_hotel/rooms.jpg',
  //                     rooms:
  //                       {
  //                         standard_room: {
  //                           name: 'standard',
  //                           geo_name: 'სტანდარტული',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         },
  //                         premium_room: {
  //                           name: 'premium',
  //                           geo_name: 'პრემიუმი',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         }
  //                       },
  //                   }
  //               },
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     district: [
  //       {
  //         id: 3,
  //         name: 'Samtskhe-Javakheti',
  //         geo_name: 'სამცხე-ჯავახეთი',
  //         cities: [
  //           {
  //             id: 0,
  //             name: 'borjomi',
  //             geo_name: 'ბორჯომი',
  //             hotels: [
  //               {
  //                 hotel:
  //                   {
  //                     id: 0,
  //                     name: 'Crown',
  //                     geo_name: 'Crown',
  //                     type: 'Hotel',
  //                     geo_type: 'სასტუმრო',
  //                     address: ' lorem ipsum lorem ipsum lorem ipsum',
  //                     geo_address: 'ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ',
  //                     stars: 5,
  //                     number_of_rooms: 15,
  //                     parking: true,
  //                     pool: false,
  //                     spa: false,
  //                     info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
  //                       'Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
  //                       'harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
  //                     image: '/assets/img/georgiaImages/borjomi/borjomi_hotels/crown_hotel/crown.jpg',
  //                     rooms:
  //                       {
  //                         standard_room: {
  //                           name: 'standard',
  //                           geo_name: 'სტანდარტული',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         },
  //                         premium_room: {
  //                           name: 'premium',
  //                           geo_name: 'პრემიუმი',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         }
  //                       },
  //                   }
  //               },
  //               {
  //                 hotel:
  //                   {
  //                     id: 1,
  //                     name: 'Milano',
  //                     type: 'Hotel',
  //                     geo_type: 'სასტუმრო',
  //                     geo_name: 'Milano',
  //                     address: ' lorem ipsum lorem ipsum lorem ipsum',
  //                     geo_address: 'ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ',
  //                     stars: 4,
  //                     number_of_rooms: 14,
  //                     parking: true,
  //                     pool: true,
  //                     spa: true,
  //                     info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
  //                       'Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
  //                       'harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
  //                     image: '/assets/img/georgiaImages/borjomi/borjomi_hotels/milano_hotel/milano.jpg'
  //                     ,
  //                     rooms:
  //                       {
  //                         standard_room: {
  //                           name: 'standard',
  //                           geo_name: 'სტანდარტული',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         },
  //                         premium_room: {
  //                           name: 'premium',
  //                           geo_name: 'პრემიუმი',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         }
  //                       },
  //                   }
  //               },
  //               {
  //                 hotel:
  //                   {
  //                     id: 2,
  //                     name: 'Old Borjomi',
  //                     type: 'Hotel',
  //                     geo_type: 'სასტუმრო',
  //                     geo_name: 'Old Borjomi',
  //                     address: ' lorem ipsum lorem ipsum lorem ipsum',
  //                     geo_address: 'ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ',
  //                     stars: 5,
  //                     number_of_rooms: 13,
  //                     parking: true,
  //                     pool: true,
  //                     spa: true,
  //                     info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
  //                       'Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
  //                       'harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
  //                     image: '/assets/img/georgiaImages/borjomi/borjomi_hotels/old_borjomi/old_borjomi.jpg',
  //                     rooms:
  //                       {
  //                         standard_room: {
  //                           name: 'standard',
  //                           geo_name: 'სტანდარტული',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         },
  //                         premium_room: {
  //                           name: 'premium',
  //                           geo_name: 'პრემიუმი',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         }
  //                       },
  //                   }
  //               },
  //               {
  //                 hotel:
  //                   {
  //                     id: 3,
  //                     name: 'Victoria',
  //                     type: 'Hotel',
  //                     geo_type: 'სასტუმრო',
  //                     geo_name: 'Victoria',
  //                     address: ' lorem ipsum lorem ipsum lorem ipsum',
  //                     geo_address: 'ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ',
  //                     stars: 5,
  //                     number_of_rooms: 12,
  //                     parking: true,
  //                     pool: true,
  //                     spa: true,
  //                     info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
  //                       'Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
  //                       'harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
  //                     image: '/assets/img/georgiaImages/borjomi/borjomi_hotels/victoria_hotel/victoria.jpg',
  //                     rooms:
  //                       {
  //                         standard_room: {
  //                           name: 'standard',
  //                           geo_name: 'სტანდარტული',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         },
  //                         premium_room: {
  //                           name: 'premium',
  //                           geo_name: 'პრემიუმი',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         }
  //                       },
  //                   }
  //               }
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     district: [
  //       {
  //         id: 4,
  //         name: 'Svaneti',
  //         geo_name: 'სვანეთი',
  //         cities: [
  //           {
  //             id: 0,
  //             name: 'Mestia',
  //             geo_name: 'მესტია',
  //             hotels: [
  //               {
  //                 hotel:
  //                   {
  //                     id: 0,
  //                     name: 'Old House',
  //                     geo_name: 'ძველი სახლი',
  //                     type: 'Hotel',
  //                     geo_type: 'სასტუმრო',
  //                     address: ' lorem ipsum lorem ipsum lorem ipsum',
  //                     geo_address: 'ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ',
  //                     stars: 3,
  //                     number_of_rooms: 7,
  //                     parking: true,
  //                     pool: false,
  //                     spa: true,
  //                     info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
  //                       'Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
  //                       'harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
  //                     image: '/assets/img/georgiaImages/svaneti/svaneti_hotels/old_house/old_house.jpg',
  //                     rooms:
  //                       {
  //                         standard_room: {
  //                           name: 'standard',
  //                           geo_name: 'სტანდარტული',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         },
  //                         premium_room: {
  //                           name: 'premium',
  //                           geo_name: 'პრემიუმი',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         }
  //                       },
  //                   }
  //               },
  //               {
  //                 hotel:
  //                   {
  //                     id: 1,
  //                     name: 'Svaneti',
  //                     geo_name: 'სვანეთი',
  //                     type: 'Hotel',
  //                     geo_type: 'სასტუმრო',
  //                     address: ' lorem ipsum lorem ipsum lorem ipsum',
  //                     geo_address: 'ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ',
  //                     stars: 5,
  //                     number_of_rooms: 15,
  //                     parking: true,
  //                     pool: true,
  //                     spa: true,
  //                     info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
  //                       'Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
  //                       'harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
  //                     image: '/assets/img/georgiaImages/svaneti/svaneti_hotels/svaneti_hotel/svaneti.jpg',
  //                     rooms:
  //                       {
  //                         standard_room: {
  //                           name: 'standard',
  //                           geo_name: 'სტანდარტული',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         },
  //                         premium_room: {
  //                           name: 'premium',
  //                           geo_name: 'პრემიუმი',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         }
  //                       },
  //                   }
  //               },
  //               {
  //                 hotel:
  //                   {
  //                     id: 2,
  //                     name: 'Tetnuldi',
  //                     geo_name: 'თეთნულდი',
  //                     type: 'Hotel',
  //                     geo_type: 'სასტუმრო',
  //                     address: ' lorem ipsum lorem ipsum lorem ipsum',
  //                     geo_address: 'ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ',
  //                     stars: 4,
  //                     number_of_rooms: 5,
  //                     parking: true,
  //                     pool: false,
  //                     spa: true,
  //                     info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
  //                       'Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
  //                       'harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
  //                     image: '/assets/img/georgiaImages/svaneti/svaneti_hotels/tetnuldi_hotel/tetnuldi.jpg',
  //                     rooms:
  //                       {
  //                         standard_room: {
  //                           name: 'standard',
  //                           geo_name: 'სტანდარტული',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         },
  //                         premium_room: {
  //                           name: 'premium',
  //                           geo_name: 'პრემიუმი',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         }
  //                       },
  //                   }
  //               },
  //               {
  //                 hotel:
  //                   {
  //                     id: 3,
  //                     name: 'Ushguli',
  //                     geo_name: 'უშგული',
  //                     type: 'Hotel',
  //                     geo_type: 'სასტუმრო',
  //                     address: ' lorem ipsum lorem ipsum lorem ipsum',
  //                     geo_address: 'ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ',
  //                     stars: 5,
  //                     number_of_rooms: 15,
  //                     parking: true,
  //                     pool: true,
  //                     spa: true,
  //                     info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
  //                       'Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
  //                       'harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
  //                     image: '/assets/img/georgiaImages/svaneti/svaneti_hotels/ushguli_hotel/ushguli_hotel.jpg',
  //                     rooms:
  //                       {
  //                         standard_room: {
  //                           name: 'standard',
  //                           geo_name: 'სტანდარტული',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         },
  //                         premium_room: {
  //                           name: 'premium',
  //                           geo_name: 'პრემიუმი',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         }
  //                       },
  //                   }
  //               },
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     district: [
  //       {
  //         id: 5,
  //         name: 'Racha',
  //         geo_name: 'რაჭა',
  //         cities: [
  //           {
  //             id: 0,
  //             name: 'Oni',
  //             geo_name: 'ონი',
  //             hotels: [
  //               {
  //                 hotel:
  //                   {
  //                     id: 0,
  //                     name: 'Cape Racha',
  //                     geo_name: 'Cape Racha',
  //                     type: 'Hotel',
  //                     geo_type: 'სასტუმრო',
  //                     address: ' lorem ipsum lorem ipsum lorem ipsum',
  //                     geo_address: 'ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ',
  //                     stars: 5,
  //                     number_of_rooms: 15,
  //                     parking: true,
  //                     pool: true,
  //                     spa: true,
  //                     info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
  //                       'Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
  //                       'harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
  //                     image: '/assets/img/georgiaImages/racha/racha_hotels/cape_racha_hotel/cape_racha.jpg',
  //                     rooms:
  //                       {
  //                         standard_room: {
  //                           name: 'standard',
  //                           geo_name: 'სტანდარტული',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         },
  //                         premium_room: {
  //                           name: 'premium',
  //                           geo_name: 'პრემიუმი',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         }
  //                       },
  //                   }
  //               },
  //               {
  //                 hotel:
  //                   {
  //                     id: 1,
  //                     name: 'Shaori',
  //                     geo_name: 'შაორი',
  //                     type: 'Hotel',
  //                     geo_type: 'სასტუმრო',
  //                     address: ' lorem ipsum lorem ipsum lorem ipsum',
  //                     geo_address: 'ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ',
  //                     stars: 5,
  //                     number_of_rooms: 8,
  //                     parking: true,
  //                     pool: false,
  //                     spa: true,
  //                     info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
  //                       'Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
  //                       'harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
  //                     image: '/assets/img/georgiaImages/racha/racha_hotels/shaori_hotel/shaori.jpg',
  //                     rooms:
  //                       {
  //                         standard_room: {
  //                           name: 'standard',
  //                           geo_name: 'სტანდარტული',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         },
  //                         premium_room: {
  //                           name: 'premium',
  //                           geo_name: 'პრემიუმი',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         }
  //                       },
  //                   }
  //               },
  //               {
  //                 hotel:
  //                   {
  //                     id: 2,
  //                     name: 'Tsesi',
  //                     geo_name: 'წესი',
  //                     type: 'Hotel',
  //                     geo_type: 'სასტუმრო',
  //                     address: ' lorem ipsum lorem ipsum lorem ipsum',
  //                     geo_address: 'ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ',
  //                     stars: 5,
  //                     number_of_rooms: 15,
  //                     parking: true,
  //                     pool: true,
  //                     spa: false,
  //                     info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
  //                       'Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
  //                       'harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
  //                     image: '/assets/img/georgiaImages/racha/racha_hotels/tsesi_hotel/tsesi.jpg',
  //                     rooms:
  //                       {
  //                         standard_room: {
  //                           name: 'standard',
  //                           geo_name: 'სტანდარტული',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         },
  //                         premium_room: {
  //                           name: 'premium',
  //                           geo_name: 'პრემიუმი',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         }
  //                       },
  //                   }
  //               },
  //               {
  //                 hotel:
  //                   {
  //                     id: 3,
  //                     name: 'Tsibena',
  //                     geo_name: 'წიბენა',
  //                     type: 'Hotel',
  //                     geo_type: 'სასტუმრო',
  //                     address: ' lorem ipsum lorem ipsum lorem ipsum',
  //                     geo_address: 'ლორემ იპსუმ ლორემ იპსუმ ლორემ იპსუმ',
  //                     stars: 5,
  //                     number_of_rooms: 8,
  //                     parking: true,
  //                     pool: false,
  //                     spa: true,
  //                     info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n' +
  //                       'Accusantium ad aliquam assumenda consectetur consequuntur cupiditate ducimus expedita \n' +
  //                       'harum hic inventore labore laboriosam magni minus nesciunt odio sed soluta voluptate, voluptatibus?',
  //                     image: '/assets/img/georgiaImages/racha/racha_hotels/tsibena/tsibena.jpg',
  //                     rooms:
  //                       {
  //                         standard_room: {
  //                           name: 'standard',
  //                           geo_name: 'სტანდარტული',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         },
  //                         premium_room: {
  //                           name: 'premium',
  //                           geo_name: 'პრემიუმი',
  //                           room_icon: `<i class='bx bx-bed'></i>`,
  //                           images: [
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_1.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_2.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_3.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_4.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_5.jpg'
  //                             },
  //                             {
  //                               image: 'src/assets/img/georgiaImages/tbilisi/tbilisi_hotels/bitmore_hotel/rooms/image_6.jpg'
  //                             },
  //                           ]
  //                         }
  //                       },
  //                   }
  //               },
  //             ]
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ];


















  ngOnInit(): void {


  }



}
