import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { ResumeService } from '../../services/resume.service';
import { PortfolioService } from '../../services/portfolio.service';
import { ExperienceService } from '../../services/experience.service';
import { ServiciosService } from '../../services/servicios.service';
import { ContactService } from 'src/app/services/contact.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Message } from '../../interfaces/message.interface';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public contact: FormGroup;
  contactVar: Message;


  constructor(public _infoService: InfoService,
              public _resumeService: ResumeService,
              public _portfolioService: PortfolioService,
              public _experienceService: ExperienceService,
              public _contactService: ContactService,
              public _serviciosService: ServiciosService,
              public snack: MatSnackBar) {}

  ngOnInit() {
    this.contact = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email] ),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
      created_at: new FormControl(new Date, Validators.required)
    });
  }

  openDialog() {
  }
  sendMessage() {
    // console.log(this.contact.value);
    if (this.contact.valid) {
      this._contactService.saveContact(this.contact.value).then(resp => {
        console.log('guardado');
        this.contact.reset();
        this.snack.open('Su inquietud ha sido enviada', 'Jose Jeanton', {duration: 3000});
      });
    }
  }

}
