import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  url: string;

  constructor(private inAppBrowser: InAppBrowser) {

  }

  openWebpage(url: string){
  	const options: InAppBrowserOptions = {
  		location : 'no',
  		hidden : 'no',
  		zoom : 'no',
  		hardwareback : 'yes',
  		mediaPlaybackRequiresUserAction : 'no',
  		shouldPauseOnSuspend : 'yes',
  		closebuttoncaption : 'Cerrar',
  		disallowoverscroll : 'no',
  		toolbar : 'yes',
  		enableViewportScale : 'no',
  		allowInlineMediaPlayback : 'no',
  		presentationstyle : 'pagesheet',
  		fullscreen : 'yes'
  	}

  	//Abrimos la URL y nos retrona un InAppBrowserObject
  	const browser = this.inAppBrowser.create(url, '_self', options);

  }

}
