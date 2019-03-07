import { Injectable } from '@angular/core';
import { Experience } from '../interfaces/experience.interface';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  experiences: Experience [] = [];

  constructor(public afs: AngularFirestore) {
    this.loadExperiences();
  }

  loadExperiences() {
    this.afs.collection('experience', ref => ref.orderBy('date')).valueChanges().subscribe(expe => {
      // const sorted = expe.sort(function(obj1, obj2) {
      //   return obj2['date'] - obj1['date'];
      // });

      this.experiences = expe;
    });
  }
}
