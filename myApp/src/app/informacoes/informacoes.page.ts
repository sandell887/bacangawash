import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.page.html',
  styleUrls: ['./informacoes.page.scss'],
})
export class InformacoesPage implements OnInit {

  sliderOpts ={
    zoom: {
      maxRatio: 2
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
