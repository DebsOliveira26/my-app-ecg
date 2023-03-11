import { NavController } from '@ionic/angular';
import { Tab2Page } from './../tab2/tab2.page';
import { RouteReuseStrategy } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

login = "Login";

constructor(
  private navCtrl:NavController
) {}

  showTab2Page(){
    this.navCtrl.navigateForward('tab2.page.html')
  }
}

