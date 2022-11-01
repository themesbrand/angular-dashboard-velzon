import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-develop-assessment-dynamic-form',
  templateUrl: './develop-assessment-dynamic-form.component.html',
  styleUrls: ['./develop-assessment-dynamic-form.component.scss']
})
export class DevelopAssessmentDynamicFormComponent implements OnInit {

  isPreviewForm : boolean = false;

  evaluationCategory: any = null;
  evaluationCategoryList : any = [
    {
      value: 'Unsatisfactory - Not Evaluated', 
      list : [ 'Unsatisfactory', 'Below Expectations', 'Meets Expectations', 'Exceeds Expectations', 'Not Evaluated']
    },
    {
      value: 'Strongly Disagree - Strongly Agree', 
      list :[ 'Strongly Disagree'	, 'Disagree', 'Agree', 'Strongly Agree' ]
    },
    {
      value: '1 - 4', 
      list : [ 1, 2, 3, 4 ]
    },
    {
      value: '1 - 5 or More',
      list : [ 1, 2, 3, 4, '5 or More']
    }    
  ];
  selectedEvaluationCategoryList : any = null
  criteriaList : any[] = []
  selectedSelectionType : any = null

  rowValue : any = null;

  constructor(
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
  }

  onChangeCategory() {
    const value = this.evaluationCategoryList.filter(
      (element : any )=> element.value === this.evaluationCategory
    )
    console.log(value)
    if(value.length !== 0) {
      this.selectedEvaluationCategoryList = value[0].list
    }
    console.log(this.selectedEvaluationCategoryList);

    this.criteriaList = []

  }

  addNewCriteriaListRow() {
    let choice : boolean = false;
    let colspan = 0;
    let choices : any[] = []
    
    if(this.selectedSelectionType === 'Add Multi Selection') {
      choice = true,
      choices = this.selectedEvaluationCategoryList
    } else {
      const len = this.selectedEvaluationCategoryList.length;
      colspan = len
      choices = ['input field']

    }

    const row = {
      isChoices : choice,
      question : null,
      colspan : colspan,
      choices : choices
    }
    this.criteriaList.push(row)
    console.log(this.criteriaList)
  }

  onChangeSelection() {
   
  }

  onTogglePreview() {
    if(this.isPreviewForm) {
      this.isPreviewForm = false
    } else {
      this.isPreviewForm = true
    }
  }
 
  onChangeCriteria(i : any) {
    
    console.log(this.criteriaList[i].question)
  }

  removeRow(i : any) {
    this.criteriaList.splice(i, 1)
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }
}
