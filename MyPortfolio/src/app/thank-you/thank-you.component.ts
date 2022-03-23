import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss']
})
export class ThankYouComponent implements OnInit {

  constructor(private alertify: AlertifyService) { }

  ngOnInit() {
    // this.alertify.success('Your Submission Has Been Sent!');
  }

}
