import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MatchdetailsPage } from '../matchdetails/matchdetails';
import { MatchesProvider } from '../../providers/matches/matches';
import { Match } from '../../models/match';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedMatch: any
  icons: string[]
  refId: string = ''
  matchesList: Array<Match> = []
  userMatchesList: Array<Match> = []
  userMatches: boolean = false

  constructor(
    public navCtrl: NavController,
    private matchesProvider: MatchesProvider
  ){
    this.matchesList = this.matchesProvider.matchesList;
    this.userMatchesList = this.matchesProvider.userMatchesList;
    this.refId = this.matchesProvider.refId;
  }

  matchTapped(event, match) {
    this.navCtrl.push(MatchdetailsPage, {
      match: match
    });
  }
}