import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import {RatePage} from '../rate/rate.page';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {

  constructor(public modalController: ModalController, public alertController: AlertController, public ratePage: RatePage) { }

  ngOnInit() {
  }
  async addRate() {
    const modal = await this.modalController.create({
      component: RatePage,
      cssClass: 'dialog-modal',
      componentProps: {
        'id': "1",
      }
    });
    return await modal.present();
  }
  async endTransaction() {
    const alert = await this.alertController.create({
      header: "تأكيد انهاء",
      message: "هل تريد بالفعل انهاء المعاملة",
      buttons: [{
        text: "نعم",
        handler: () => {
          this.addRate();
        }
      }, {
        text: "لا",
        role: "cancel",
        cssClass: "secondary",
        handler: () => {

        }
      }
    ]
    });
    await alert.present();
  }

}
