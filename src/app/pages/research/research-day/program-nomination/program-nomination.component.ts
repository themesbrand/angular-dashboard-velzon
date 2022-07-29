import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data'

@Component({
  selector: 'app-program-nomination',
  templateUrl: './program-nomination.component.html',
  styleUrls: ['./program-nomination.component.scss'],
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
  ],
})
export class ProgramNominationComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  listData = data;
  isFilterOpened: boolean = false;

  nominationForm !: FormGroup;

  constructor(
    private router : Router,
    private formBuilder : FormBuilder,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Research Day", link: 'research/research-day'},
      { label: "Program Nomination", active : true }
    ];
    this.nominationFormInit()
  }

  nominationFormInit() {
    this.nominationForm = this.formBuilder.group({
      winnersArray : new FormArray([])
    })
    this.addWinnersArray();
  }

  get winnersArrayControls() {
    return (<FormArray>this.nominationForm.get('winnersArray')).controls;
  }
  
  addWinnersArray() {
    if(this.winnersArrayControls.length < 3) {
      (<FormArray>this.nominationForm.get('winnersArray')).push(
        new FormGroup({
          name : new FormControl(null, []),
          position : new FormControl(null, []),
          level : new FormControl(null, [])
        })
      );
    }
  }
  deleteWinnersArray(i : any) {
    (<FormArray>this.nominationForm.get('winnersArray')).removeAt(i)
  }
  
  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }

  closeOtherModals(){
    this.modalService.dismissAll()
  }

  openModal(modal : any, size: any) {
    this.modalService.open(modal, {size : size})
  }
}
