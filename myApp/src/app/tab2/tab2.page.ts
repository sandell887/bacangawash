import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private browser : InAppBrowser) {}

  openUrl(){
    this.browser.create('https://news.google.com/covid19/map?hl=pt-BR&mid=%2Fm%2F01hd3y&gl=BR&ceid=BR%3Apt-419', '_self')
  } 

}
