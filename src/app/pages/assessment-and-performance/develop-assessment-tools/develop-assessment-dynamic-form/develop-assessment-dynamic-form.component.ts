import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-develop-assessment-dynamic-form',
  templateUrl: './develop-assessment-dynamic-form.component.html',
  styleUrls: ['./develop-assessment-dynamic-form.component.scss']
})
export class DevelopAssessmentDynamicFormComponent implements OnInit {

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

  constructor() { }

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
    const row = {
      rowValue : null,
      selectionValue: this.selectedSelectionType
    }
    this.criteriaList.push(row)
    this.selectedSelectionType = null
    console.log(this.criteriaList)
  }

  onChangeSelection() {
   
  }

  removeRow(i : any) {
    this.criteriaList.splice(i, 1)
  }
}
