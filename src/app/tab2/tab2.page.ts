import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Tab3Page } from './../tab3/tab3.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  cadastro = "Cadastros";

  public cadastrosFeitos;

  constructor(
    private navCtrl:NavController
  ) {
    this.cadastrosFeitos = [
      {nome: 'Ana Maria', dataNasc: '11/02/2000'}
    ]
  }
    showTab3Page(){
      this.navCtrl.navigateForward('tab3.page.html')
    }
  }


