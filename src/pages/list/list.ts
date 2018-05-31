import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MatchdetailsPage } from '../matchdetails/matchdetails';

import { Match } from '../../models/match'

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedMatch: any
  icons: string[]
  refId: string = '12345'
  matchesList: Array<Match> = [
    {
      matchId: "1",
      refType: "AD1",
      refId: "12345",
      teams: [
        "IFK Göteborg",
        "BK Häcken"
      ],
      time: "27 juni, 12:00",
      matchTime: "2x30",
      matchType: "B15, gruppspel",
      pitch: "Grimbo 1"
    },
    {
      matchId: "2",
      refType: "HD",
      refId: "67890",
      teams: [
        "Helgingborg",
        "Real Madrid"
      ],
      time: "27 juni, 16:00",
      matchTime: "2x25",
      matchType: "F14, gruppspel",
      pitch: "Grimbo 2"
    }
  ]
  userMatchesList: Array<Match> = this.matchesList.filter(m => m.refId === this.refId)
  userMatches: boolean = false

  constructor(
    public navCtrl: NavController
  ){ 
    console.log(this.userMatchesList);
  }

  matchTapped(event, match) {
    this.navCtrl.push(MatchdetailsPage, {
      match: match
    });
  }
}