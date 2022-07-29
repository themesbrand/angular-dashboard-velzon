import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';

import { data } from './data';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-research-funding-opportunities',
  templateUrl: './research-funding-opportunities.component.html',
  styleUrls: ['./research-funding-opportunities.component.scss'],
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
export class ResearchFundingOpportunitiesComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  listData = data;
  isFilterOpened: boolean = false;
  selectedApplication: any;
  applicationReviewStatus: any;
  assignReviewersStatus: any;

  fundRequestForm !: FormGroup
  supportingFiles: any;
  quotationFiles: any;
  invoiceFiles: any;

  constructor(
    private router : Router,
    private modalService : NgbModal,
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Research", link: '/research/view-application'},
      { label: "Funding Opportunities", active : true }
    ];
    this.fundRequestFormInit()
  }

  fundRequestFormInit() {
    this.fundRequestForm = this.formBuilder.group({
      isRequiredMore: new FormControl(null),
      requireFundsArray : new FormArray([])
    })
    this.addRequireFundsArray()
  }
  
  get fundRequestFormValues () {
    return this.fundRequestForm.value
  }

  get requireFundsArrayControls() {
    return (<FormArray>this.fundRequestForm.get('requireFundsArray')).controls;
  }

  addRequireFundsArray() {
    (<FormArray>this.fundRequestForm.get('requireFundsArray')).push(
      new FormGroup({
        description : new FormControl(null, []),
        justifications : new FormControl(null, []),
        requiredFund : new FormControl(null, []),
      })
    );
  }
  
  onDeleteRequireFundsArray(index : number) {
    if((<FormArray>this.fundRequestForm.get('requireFundsArray')).length != 1) {
      (<FormArray>this.fundRequestForm.get('requireFundsArray')).removeAt(index);
    }
  }

  get getRequireFundsTotal () {
    let total = 0
    this.requireFundsArrayControls.forEach(control => {
      total = total + +control.value.requiredFund
    })
    return total
  }

  setApplication(application : any) {
    this.selectedApplication = application;
  }

  onFilter() {
    if(this.isFilterOpened) {
      this.isFilterOpened = false;
    } else {
      this.isFilterOpened = true
    }
  }
  
  onChangeApplicationReviewStatus(event: any) {
    console.log(event)
    this.applicationReviewStatus = event;
  }

  onChangeAssignReviewersStatus(event: any) {
    console.log(event)
    this.assignReviewersStatus = event;
  }

  
  onRemove(event : any, type: any) {
    switch(type) {
      case 'supportingFiles' : {
        this.supportingFiles.splice(this.supportingFiles.indexOf(event), 1);
        return
      }
      case 'quotationFiles' : {
        this.quotationFiles.splice(this.quotationFiles.indexOf(event), 1);
        return
      }
      case 'invoiceFiles' : {
        this.invoiceFiles.splice(this.invoiceFiles.indexOf(event), 1);
        return
      }

      default : {
        break;
      }
    }
  }
  onSelect(event : any, type: any) {
    switch(type) {
      case 'supportingFiles' : {
        this.supportingFiles.push(...event.addedFiles);
        return
      }
      case 'quotationFiles' : {
        this.quotationFiles.push(...event.addedFiles);
        return
      }
      case 'invoiceFiles' : {
        this.invoiceFiles.push(...event.addedFiles);
        return
      }

      default : {
        break;
      }
    }
  }

  openModal(modal : any, size: any) {
    this.modalService.open(modal, {size : size})
  }


  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }
}
