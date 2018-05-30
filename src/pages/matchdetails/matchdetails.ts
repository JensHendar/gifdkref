import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Match } from '../../models/match';

@IonicPage()
@Component({
  selector: 'page-matchdetails',
  templateUrl: 'matchdetails.html',
})
export class MatchdetailsPage {

  match: Match;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.match = navParams.get('match')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchdetailsPage');
  }

}
