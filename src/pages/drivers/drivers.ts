// import { CallNumber } from '@ionic-native/call-number';
import { DRIVERS_LIST } from './../../mocks/drivers/drivermocks';
import { Drivers } from './../../models/drivers/drivers';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-drivers',
  templateUrl: 'drivers.html',
})
export class DriverPage {

  driversList: Drivers[] = DRIVERS_LIST;
  filterdrivers: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, ) {

  this.filterdrivers= DRIVERS_LIST;

  }

  // async callNumber():Promise<any>{ private call: CallNumber

    
  //   await this.call.callNumber('0912312',true);
  // }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DriversPage');
  }

  getDrivers(searchbar){
  // set q to the value of the searchbar
  var q = searchbar.value;
  // if the value is an empty string don't filter the items
  if (q.trim() == '') {
    return;
  }

   this.driversList = this.driversList.filter((v) => {

    if (v.town.toLowerCase().indexOf(q.toLowerCase()) > -1) {
       return true;
      }

      return false;
    })

  }

  addToFavorites(){};
  


}
