import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';

declare var cordova;

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      
      StatusBar.styleDefault();
      
      let tapEnabled = false;
      let dragEnabled = false;
      let toBack = true;
      let rect = {
        x: 0,
        y: 0,
        width: platform.width(),
        height: platform.height()
      };
      
      cordova.plugins.camerapreview.startCamera(rect, "rear", tapEnabled, dragEnabled, toBack);
    });
  }
}

ionicBootstrap(MyApp);
