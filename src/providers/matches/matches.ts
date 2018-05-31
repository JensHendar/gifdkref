import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Match } from '../../models/match'

@Injectable()
export class MatchesProvider {
  public refId: string = '12345';
  public matchesList: Array<Match> = [
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
  public userMatchesList: Array<Match> = this.matchesList.filter(m => m.refId === this.refId)

  constructor(public http: HttpClient) {

  }

}
