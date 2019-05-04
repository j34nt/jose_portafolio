import { Component, OnInit } from '@angular/core';
import { InfoService } from './services/info.service';

declare function init_plugins();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public _infoService: InfoService) {

  }
  ngOnInit() {
    init_plugins();
  }
}
