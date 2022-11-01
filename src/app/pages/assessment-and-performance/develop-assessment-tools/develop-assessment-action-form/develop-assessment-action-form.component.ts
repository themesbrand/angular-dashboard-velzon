import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-develop-assessment-action-form',
  templateUrl: './develop-assessment-action-form.component.html',
  styleUrls: ['./develop-assessment-action-form.component.scss']
})
export class DevelopAssessmentActionFormComponent implements OnInit {
  @Input() selectedRequest : any = null;

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
  selectedSelectionType : any = null

  isEditable : boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.selectedRequest);
    this.evaluationCategory = this.selectedRequest.formChoicesCategory;
    this.selectedEvaluationCategoryList = this.selectedRequest.formChoices;
  }

  onTogglePreview() {
    if(this.isEditable) {
      this.isEditable = false
    } else {
      this.isEditable = true
    }
  }
  onChangeCategory() {
    const value = this.evaluationCategoryList.filter(
      (element : any )=> element.value === this.evaluationCategory
    )
    if(value.length !== 0) {
      this.selectedEvaluationCategoryList = value[0].list
      this.selectedRequest.formChoices = value[0].list
    }

    this.selectedRequest.form = []

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
    this.selectedRequest.form.push(row)
  }


  removeRow(i : any) {
    this.selectedRequest.form.splice(i, 1)
  }
}
