
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase } from 'angularfire2/database' ;
import { AngularFireList } from 'angularfire2/database';
import { Alert } from 'ionic-angular';

@Injectable()
export class DataProvider {

  constructor(public storage: Storage,
    public afd: AngularFireDatabase){
  }
  getData() {
    let ref = this.afd.list('todos');
    return ref.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }
  save(data){
    this.afd.list('/todos').push(data);
  }

  removeItem(dataKey){
    console.log("key : ", dataKey);
    if(dataKey && typeof dataKey !== 'undefined'){
      this.afd.object('/todos/' + dataKey).remove();
    }else{
      console.log("dataKey is ", dataKey);
    }
    
  }  
 
}
