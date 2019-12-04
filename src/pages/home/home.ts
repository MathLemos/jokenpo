import { StatusBar } from '@ionic-native/status-bar';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario: any;
  resultado: any;
  computador: any;
 

  constructor(public navCtrl: NavController, public statusBar: StatusBar, private vibration: Vibration) {

  }

  ionViewDidLoad() {
    this.statusBar.styleDefault();
    this.statusBar.overlaysWebView(false);
    this.statusBar.backgroundColorByHexString("#02073E")

  }

  result(jog) {
    this.usuario = jog;
    this.vibrar();
    let numRandom = Math.floor(Math.random() * 3);
    if (this.usuario == 0 && numRandom == 1) {
      this.computador = "PAPEL";
      this.resultado = "VOCÊ PERDEU";
    } else if (this.usuario == 1 && numRandom == 2) {
      this.computador = "TESOURA";
      this.resultado = " VOCÊ PERDEU";
    } else if (this.usuario == 2 && numRandom == 0) {
      this.computador = "PEDRA";
      this.resultado = " VOCÊ PERDEU";
    } else if (this.usuario == 2 && numRandom == 1) {
      this.computador = "PAPEL";
      this.resultado = "VOCÊ GANHOU";
    } else if (this.usuario == 1 && numRandom == 0) {
      this.computador = "PEDRA";
      this.resultado = " VOCÊ GANHOU"
    } else if (this.usuario == 0 && numRandom == 2) {
      this.computador = "TESOURA";
      this.resultado = " VOCÊ GANHOU";
    } else if (this.usuario == 0 && numRandom == 0) {
      this.computador = "PEDRA";
      this.resultado = " EMPATE";
    } else if (this.usuario == 1 && numRandom == 1) {
      this.computador == "PAPEL";
      this.resultado = " EMPATE";
    } else if (this.usuario == 2 && numRandom == 2) {
      this.computador == "TESOURA";
      this.resultado = " EMPATE";
    }

  }
  vibrar() {

    this.vibration.vibrate(1000);

  }

}
