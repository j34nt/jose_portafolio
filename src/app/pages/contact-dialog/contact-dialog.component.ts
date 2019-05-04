import { Component, OnInit, Inject, Input, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { ContactService } from 'src/app/services/contact.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Message } from '../../interfaces/message.interface';

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent implements OnInit {
  from = '';
  message: Message;

  public forma: FormGroup;

  constructor(
    public _contactService: ContactService,
    public _formBuilder: FormBuilder,
    public snack: MatSnackBar
  ) {
  }

  ngOnInit() {
    this._contactService.notification.subscribe(resp => {
      this.forma.controls['from'].setValue(resp);
    });
    this.forma = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      from: new FormControl('', Validators.required),
      created_at: new FormControl(new Date, Validators.required)
    });
  }

  enviarInfo() {
    if (this.forma.valid) {
      this._contactService.saveMessage(this.forma.value).then((resp: any) => {
        this.snack.open('Su mensaje ha sido enviado', 'Jose Jeanton', {duration: 4000});
        this._contactService.ocultarDialog();
      });
    } else {
      this.snack.open('Rellena todos los campos antes de enviar', 'Jose Jeanton', {duration: 4000});
    }

  }

  cancelar() {
    this._contactService.ocultarDialog();
  }

}
