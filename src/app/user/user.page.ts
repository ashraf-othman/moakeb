import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
// import { MoakebAchievementsPage } from '../moakeb-achievements/moakeb-achievements.page';
import { MoakebAchievementsPage } from '../moakeb-achievements/moakeb-achievements.page';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async moakebAchievments() {
    // create a modal using mymodalComponent some initial data
    var modal = await this.modalController.create({
      component: MoakebAchievementsPage,
      componentProps: {
        'id': "1",
      }
    });
    // modal.onDidDismiss().then((dataReturned) => {
    //   if(dataReturned !== null) {
    //     this.dataReturned = dataReturned.data;
    //     alert('Modal Sent Data : '+ dataReturned);
    //   }
    // });
    return await modal.present();
  }
}
