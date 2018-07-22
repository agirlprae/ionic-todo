import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Observable } from 'rxjs/Observable';
/**
 * Generated class for the ViewItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-item',
  templateUrl: 'view-item.html',
})
export class ViewItemPage {

  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.item = this.navParams.get('item');
    console.log("get item ", this.item.title)
  }

  removeItem(key){
    console.log(key)
    if(key && typeof key !== 'undefined'){

    }
  }
  
  
}
