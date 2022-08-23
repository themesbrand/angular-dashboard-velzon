import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from '../data';

@Component({
  selector: 'app-page-innovation-initiative',
  templateUrl: './page-innovation-initiative.component.html',
  styleUrls: ['./page-innovation-initiative.component.scss'],
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
export class PageInnovationInitiativeComponent implements OnInit {

  listData = data;
  userRole: string | null = null;

  breadCrumbItems!: Array<{}>;
  isFilterOpened: boolean = false;

  selectedInitiative: any;

  constructor(
    private router : Router,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userType');

    this.breadCrumbItems = [
      { label: "Innovation Center", link: '/innovation-centre/innovation-initiative'},
      { label: "Innovation Initiative", active : true }
    ];
  }

  setInitiative(initiative : any) {
    this.selectedInitiative = initiative;
  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  onNavigate(url : any) {
    this.modalService.dismissAll();
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }
}
