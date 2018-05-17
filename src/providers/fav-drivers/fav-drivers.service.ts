import { Drivers } from './../../models/drivers/drivers';

export class DriversService{

  private favoriteDrivers: Drivers[] = [];

  addDriverToFavorites(driver: Drivers) {

    this.favoriteDrivers.push(driver);
    console.log(this.favoriteDrivers);
  }


  removeDriverFromFavorites(driver: Drivers){

    const position = this.favoriteDrivers.findIndex((driverEl: Drivers) => {
      return driverEl.id == driver.id;
    });
    this.favoriteDrivers.splice(position, 1)

  }

  getFavoriteDrivers(){
    return this.favoriteDrivers.slice();
  }

}