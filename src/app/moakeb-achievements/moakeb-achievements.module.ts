import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MoakebAchievementsPage } from './moakeb-achievements.page';

const routes: Routes = [
  {
    path: '',
    component: MoakebAchievementsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MoakebAchievementsPage]
})
export class MoakebAchievementsPageModule {}
