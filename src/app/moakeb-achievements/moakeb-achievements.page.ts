import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
@Component({
  selector: 'app-moakeb-achievements',
  templateUrl: './moakeb-achievements.page.html',
  styleUrls: ['./moakeb-achievements.page.scss'],
})
export class MoakebAchievementsPage implements OnInit {
  id: number;

  constructor(private modalController: ModalController,
     private navParams: NavParams) { }

  ngOnInit() {
    console.table(this.navParams);
    this.id = this.navParams.data.paramID;
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";
    await this.modalController.dismiss(onClosedData);
  }
}
