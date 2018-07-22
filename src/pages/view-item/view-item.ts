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

  title;
  description;
  key;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataProvider) {
  }

  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
    this.key = this.navParams.get('item').key;
    console.log("get item ", this.title);
    console.log("title: ", this.title);
    console.log("description: ", this.description);
  }

  removeItem(key){
    console.log(key)
    if(key && typeof key !== 'undefined'){
      this.dataService.removeItem(key);
    }
  }
  
  
}
