import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data';

@Component({
  selector: 'app-presentation-evaluation',
  templateUrl: './presentation-evaluation.component.html',
  styleUrls: ['./presentation-evaluation.component.scss']
})
export class PresentationEvaluationComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  listData = data;

  constructor(
    private router : Router,
    private formBuilder : FormBuilder,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Research Day", link: '/research/research-day'},
      { label: "Presentation Evaluation", active : true }
    ];
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }

  openModal(modal : any, size: any) {
    this.modalService.open(modal, {size : size})
  }

}
