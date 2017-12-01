import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SalaPage } from './sala/sala';
import { DormiPage } from './dormi/dormi';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  places = [
    {
      "room":'Sala',
      "page":SalaPage
    },{
      "room":'Dormitorio',
      "page":DormiPage
    },
  ];

  constructor(public navCtrl: NavController) {

  }

  goToPage(OtherPage) {
    this.navCtrl.push(OtherPage);
  }

}
