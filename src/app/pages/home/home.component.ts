import { Component, OnInit } from '@angular/core';
import { InfoService } from '../../services/info.service';
import { ResumeService } from '../../services/resume.service';
import { PortfolioService } from '../../services/portfolio.service';
import { ExperienceService } from '../../services/experience.service';
import { ServiciosService } from '../../services/servicios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public _infoService: InfoService,
              public _resumeService: ResumeService,
              public _portfolioService: PortfolioService,
              public _experienceService: ExperienceService,
              public _serviciosService: ServiciosService) { }

  ngOnInit() {
  }

}
