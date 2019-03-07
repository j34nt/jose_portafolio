import { Injectable } from '@angular/core';
import { Portfolio } from '../interfaces/portfolio.interface';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  portfolio: Portfolio[] = [];
  constructor(public afs: AngularFirestore) {
    this.loadPortfolio();
  }

  loadPortfolio() {
    this.afs.collection('portfolio').valueChanges().subscribe(port => {
      this.portfolio = port;
    });
  }
}
