import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { trigger, style, animate, transition } from '@angular/animations';

import {data} from './data';

@Component({
  selector: 'app-presentation-evaluation-result',
  templateUrl: './presentation-evaluation-result.component.html',
  styleUrls: ['./presentation-evaluation-result.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(-100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateY(-100%)', opacity: 0}))
        ])
      ]
    )
  ]
})
export class PresentationEvaluationResultComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  listData = data;
  isFilterOpened: boolean = true;
  isSearchResultShow : boolean = false;

  competitionGroup : any = null;
  researchDay : any = null;

  constructor(
    private router : Router,
    private formBuilder : FormBuilder,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Research Day", link: '/research/research-day'},
      { label: "Presentation Evaluation Result", active : true }
    ];
  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  onSearch() {
    this.isFilterOpened = false;
    this.isSearchResultShow = true;

  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }

  openModal(modal : any, size: any) {
    this.modalService.open(modal, {size : size})
  }
}
