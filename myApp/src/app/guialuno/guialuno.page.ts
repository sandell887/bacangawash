import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guialuno',
  templateUrl: './guialuno.page.html',
  styleUrls: ['./guialuno.page.scss'],
})
export class GuialunoPage implements OnInit {

  sliderOpts ={
    zoom: {
      maxRatio: 2
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
