import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ServiceInterface } from '../interfaces/service.inteface';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  public servicios: ServiceInterface[] = [];

  constructor(public afs: AngularFirestore) {
    this.loadServicios();
  }

  loadServicios() {
    this.afs.collection('services').valueChanges().subscribe(serv => {
      this.servicios = serv;
    });
  }
}
