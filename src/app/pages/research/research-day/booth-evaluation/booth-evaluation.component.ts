import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data'
@Component({
  selector: 'app-booth-evaluation',
  templateUrl: './booth-evaluation.component.html',
  styleUrls: ['./booth-evaluation.component.scss']
})
export class BoothEvaluationComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  listData = data;

  selectedBooth: any;
  groupType: any;

  searchForm !: FormGroup

  constructor(
    private router : Router,
    private formBuilder : FormBuilder,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Research Day", link: 'research/research-day'},
      { label: "Competition Grouping", active : true }
    ];
    this.searchFormInit()
  }
  searchFormInit() {
    this.searchForm = this.formBuilder.group({
      programBooth : new FormControl(null),
      sectionBooth : new FormControl(null),
    })
  }

  getSectionBootGroup(event : any, groupType : any) {
    console.log(event)
    this.groupType = groupType
    this.selectedBooth = event;
    this.searchForm.get('programBooth')?.patchValue(null)
  }

  getProgramBootGroup(event : any, groupType : any) {
    console.log(event)
    this.groupType = groupType
    this.selectedBooth = event;
    this.searchForm.get('sectionBooth')?.patchValue(null)

  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }

  openModal(modal : any, size: any) {
    this.modalService.open(modal, {size : size})
  }


}
