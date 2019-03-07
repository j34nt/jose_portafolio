import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  public education: any;

  constructor(private afs: AngularFirestore) {
    this.afs.collection('education').valueChanges().subscribe(resp => {
      this.education = resp;
    });
  }
}
