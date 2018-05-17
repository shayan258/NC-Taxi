
import { AuthService } from './../providers/auth/auth.service';
import { Component } from '@angular/core';
import { Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: string = 'LoginPage';
  //rootPage: string ;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private auth: AuthService
     ) {

    // this.auth.getAuthenticatedUser().subscribe(auth => {
    //   !auth ?
    //     this.rootPage = 'LoginPage' :
    //     this.rootPage = 'ProfilePage'; 
 
    // })

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

