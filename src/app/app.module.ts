import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SettingPage } from '../pages/setting/setting'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';

import { IonicStorageModule } from '@ionic/storage';
import { AddItemPage } from '../pages/add-item/add-item'
import { ViewItemPage } from '../pages/view-item/view-item';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
const firebaseConfig = {
  apiKey: "AIzaSyAuByH7T9beHhCRAk0e5a_kqWOrpzwV_k0",
  authDomain: "todo-d6bc0.firebaseapp.com",
  databaseURL: "https://todo-d6bc0.firebaseio.com",
  projectId: "todo-d6bc0",
  storageBucket: "todo-d6bc0.appspot.com",
  messagingSenderId: "440153493285"
 };
 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SettingPage,
    AddItemPage,
    ViewItemPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SettingPage,
    AddItemPage,
    ViewItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
