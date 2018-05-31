import { Component } from '@angular/core';
import { MatchesProvider } from '../../providers/matches/matches';

import { HomePage } from '../home/home';
import { ListPage } from '../list/list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ListPage;

  matchCount: number = 0;

  constructor(
    private matchesProvider: MatchesProvider
  ) {
    this.matchCount = this.matchesProvider.userMatchesList.length;
  }

}
