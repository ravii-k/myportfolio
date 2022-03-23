import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from '../_services/alertify.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formApi = 'https://getsimpleform.com/messages?';
  formApiToken = 'form_api_token=eac98a47b2c53f674a58b358e3c4b3f4';

  contactForm: FormGroup;
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.contactForm.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(private fb: FormBuilder, private alertify: AlertifyService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.createEmailForm();
  }

  createEmailForm() {
    this.contactForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.pattern('[ a-zA-Z-_\.\'’‘]*')]],
        email: ['', [Validators.required, Validators.email]],
        message: ['', Validators.required]
      }
    );
  }

  emailForm() {
    const formData = new FormData();
    formData.append('name', this.contactForm.get('name').value);
    formData.append('email', this.contactForm.get('email').value);
    formData.append('message', this.contactForm.get('message').value);
    formData.append('redirect_to', 'https://jsonplaceholder.typicode.com/todos/1');

    this.http.post<any>(this.formApi + '' + this.formApiToken, formData)
      .subscribe(
        (res) => {
          this.alertify.success('Your Submission Has Been Sent!');
          console.log('Sucess: ' + res);
          this.contactForm.reset();
          this.router.navigate(['/thankYou']);
        },
        (err) => {
          console.log('Error: ' + err);
          this.alertify.error('Something went wrong, please try again later.');
        }
      );
  }

}
