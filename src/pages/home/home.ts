import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item'
import { ViewItemPage } from '../view-item/view-item';
import { DataProvider } from '../../providers/data/data';

import { AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage { 
  items:any ;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: DataProvider) {
    this.dataService.getData().subscribe(val => {
      this.items = val;
    })
    
  }
  
  addItem(){
    let addModal = this.modalCtrl.create(AddItemPage);
    addModal.onDidDismiss((item) => {
      if(item){
        this.saveItem(item);
      }
    });
    addModal.present();
  }
  saveItem(item){
    this.dataService.save(item);
  }
  viewItem(item){
      console.log(item)
      this.navCtrl.push(ViewItemPage, {
        item: item
      });
  }

}