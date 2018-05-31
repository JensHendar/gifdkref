import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private news = [
    {
      title: "News item 1",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. "
    },
    {
      title: "News item 2",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. "
    },
    {
      title: "News item 1",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. "
    },
    {
      title: "News item 2",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. "
    },
    {
      title: "News item 1",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. "
    },
    {
      title: "News item 2",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. "
    },
    {
      title: "News item 1",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. "
    },
    {
      title: "News item 2",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. "
    },
    {
      title: "News item 1",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. "
    },
    {
      title: "News item 2",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. "
    },
    {
      title: "News item 1",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. "
    },
    {
      title: "News item 2",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. "
    }
  ]

  constructor(public navCtrl: NavController) {
    console.log(this.news)
  }

}
