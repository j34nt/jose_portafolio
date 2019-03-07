import { Injectable } from '@angular/core';
import { InfoPaginaInterface } from '../interfaces/infopage.interface';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  public info: InfoPaginaInterface;
  public cargada = false;

  constructor(private afs: AngularFirestore) {
    this.getInfo();
  }

  getInfo() {
    this.afs.collection('info').doc('1').valueChanges().subscribe( (resp: InfoPaginaInterface) => {
      this.info = resp;
      this.cargada = true;
    });
  }
}
