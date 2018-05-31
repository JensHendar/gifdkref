import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscriber } from 'rxjs/Subscriber';

import { conf } from '../../config';

@Injectable()
export class NewsProvider {
  private api_url: string = conf.api_url;

  constructor(public http: HttpClient) {
  }

  public getAllNews() {
    return this.http.get(this.api_url + "/posts");
  }

}
