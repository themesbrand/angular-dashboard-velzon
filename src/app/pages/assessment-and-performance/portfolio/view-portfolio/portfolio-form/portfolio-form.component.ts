import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-form',
  templateUrl: './portfolio-form.component.html',
  styleUrls: ['./portfolio-form.component.scss']
})
export class PortfolioFormComponent implements OnInit {

  @Input() fitar : boolean = false;

  @Input() requestData : any = null;

  progressSummary : any[] = ['Overall Progress', 'Patient Care',	'Medical Knowledge',	'Systems Based',	'Practice Based',	'Professionalism',	'Interpersonal'
]
  constructor() { }

  ngOnInit(): void {
  }

}
