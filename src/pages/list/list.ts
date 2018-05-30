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
  matches: Array<Match> = [
    {
      matchId: "1",
      refType: "AD1",
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
  userMatches: boolean = false

  constructor(public navCtrl: NavController) {
    // If we navigated to this page, we will have an item available as a nav param
    
  }

  matchTapped(event, match) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(MatchdetailsPage, {
      match: match
    });
  }
}