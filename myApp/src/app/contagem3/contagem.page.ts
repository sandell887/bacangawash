import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-contagem',
  templateUrl: './contagem.page.html',
  styleUrls: ['./contagem.page.scss'],
})
export class ContagemPage implements OnInit {

  constructor( private localNotifications: LocalNotifications) { }

  time: BehaviorSubject<string> = new BehaviorSubject('00:00')

 timer: number;
 interval;

startDuration = 360 ;

 state: 'start' | 'stop' = 'stop';

 notificationAlert(){
  console.log('notification code')
  this.localNotifications.schedule({
    title: 'Bem-Vindo(a) Ao Bacanga Wash',
    text: 'O APP ALERTARA QUANDO PRECISAR!',
    trigger: {at: new Date(Date.now() + (30 * 60 * 1000))},
    led: 'FF0000',
    sound: null
  })
}

startTimer(duration: number) {
  this.notificationAlert(); // this will show notification when time is 0
  this.state = 'start';

  clearInterval(this.interval);
  this.timer = duration * 3; //define o tempo do temporizador
  this.interval = setInterval( () => {
  this.updateTimeValue();
  }, 1000);
}

stopTimer(){
 clearInterval(this.interval);
 this.time.next('00:00');
 this.state = 'stop';
}

updateTimeValue(){
  let minutes: any = this.timer / 60;
  let seconds: any = this.timer % 60;

  minutes = String('0' + Math.floor(minutes)).slice(-2);
  seconds = String('0' + Math.floor(seconds)).slice(-2);

  const text = minutes + ':' + seconds;
  this.time.next(text);
  --this.timer;

  if (this.timer < 0) {
    this.startTimer(5);

    this.localNotifications.schedule({
      title: 'alerta!',
      text: 'Lave suas mãos ou use álcool gel!!',
      trigger: { in: 5, unit: ELocalNotificationTriggerUnit.SECOND },
      led: 'FF0000',
      sound: null
   });

    alert('Lave suas mãos a cada 30 min, Reinice o temporizador para um novo alerta.');
  }
  Date.now() + (30 * 60 * 1000)
}

  ngOnInit() {
  }

}
