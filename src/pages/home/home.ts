import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsProvider } from '../../providers/news/news';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  private news;

  constructor(
    public navCtrl: NavController,
    private newsProvider: NewsProvider
  ) {
    
  }

  ngOnInit() {
    this.newsProvider.getAllNews().subscribe((data) => {
      this.news = data;
    })
  }

}
