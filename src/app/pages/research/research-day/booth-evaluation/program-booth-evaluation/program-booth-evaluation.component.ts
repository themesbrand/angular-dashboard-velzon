import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {data} from './data'

@Component({
  selector: 'app-program-booth-evaluation',
  templateUrl: './program-booth-evaluation.component.html',
  styleUrls: ['./program-booth-evaluation.component.scss']
})
export class ProgramBoothEvaluationComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  listData = data;

  boothEvaluationForm !: FormGroup;

  evaluationTotal : any = 0

  constructor(
    private router : Router,
    private formBuilder : FormBuilder,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Research Day", link: 'research/research-day'},
      { label: "Booth Evaluation", link : 'research/research-day/booth-evaluation' },
      { label: "Program Booth Evaluation", active : true }
    ];
    this.boothEvaluationFormInit();
    this.onFormValueChange();
  }

  
  boothEvaluationFormInit() {
    this.boothEvaluationForm = this.formBuilder.group({
      question0 : new FormControl(null),
      question1 : new FormControl(null),
      question2 : new FormControl(null),
      question3 : new FormControl(null),
      question4 : new FormControl(null),
      question5 : new FormControl(null),
      question6 : new FormControl(null)
    })
  }

  
  onFormValueChange() {
    this.boothEvaluationForm.valueChanges.subscribe(res => {
      console.log(res)
      this.evaluationTotal = res.question0 +  res.question1 +  res.question2 +  res.question3 +  res.question4 +  res.question5 +  res.question6


    })
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }

  openModal(modal : any, size: any) {
    this.modalService.open(modal, {size : size})
  }


}
