import { Injectable, EventEmitter } from '@angular/core';
import { Message } from '../interfaces/message.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import * as faker from 'faker';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public from = '';
  public oculto = 'oculto';
  public notification = new EventEmitter<any>();

  constructor(
    public afs: AngularFirestore
  ) { }

  ocultarDialog() {
    this.oculto = 'oculto';

  }
  mostrarDialog(from: string) {
    this.notification.emit(from);
    this.oculto = '';
  }

  saveMessage(message: Message) {
    message.id = faker.random.alphaNumeric(16);
    return this.afs.collection('messages').doc(message.id).set(Object.assign({}, message));
  }

  saveContact(contact: Message) {
    contact.id = faker.random.alphaNumeric(16);
    return this.afs.collection('contacts').doc(contact.id).set(Object.assign({}, contact));
  }
}
