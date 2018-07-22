import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RemoveItemPage } from './remove-item';

@NgModule({
  declarations: [
    RemoveItemPage,
  ],
  imports: [
    IonicPageModule.forChild(RemoveItemPage),
  ],
})
export class RemoveItemPageModule {}
