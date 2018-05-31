import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MatchdetailsPage } from '../pages/matchdetails/matchdetails';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MatchesProvider } from '../providers/matches/matches';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MatchdetailsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TabsPage,
    MatchdetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MatchesProvider
  ]
})
export class AppModule {}
