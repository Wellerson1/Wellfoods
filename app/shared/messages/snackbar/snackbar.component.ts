import { Component, OnInit, Injectable } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import { NotificationService } from '../notification.service';


@Component({
  selector: 'mt-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],

  //animação para invisivel para visivel da message
  animations: [
    trigger('snack-visibility', [
      state('hidden', style({
        opacity: 0,
        bottom: "0px",
      })),
      state('visible', style({
        opacity: 1,
        bottom: "30px",
      })),
      transition('hidden => visible', animate('500ms 0s ease-in')),
      transition('visible => hidden', animate('500ms 0s ease-in')),
  ])
  ]
})
export class SnackbarComponent implements OnInit {

  message: string = 'Hello there!'
  snackVisibility: string = 'hidden'

  constructor(private notificationService: NotificationService){}

  ngOnInit() {
    this.notificationService.notifer.subscribe(message =>{
      this.message = message
      this.snackVisibility = 'visible'
    })
  }

}
