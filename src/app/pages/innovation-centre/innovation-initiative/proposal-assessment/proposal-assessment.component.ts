import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-proposal-assessment',
  templateUrl: './proposal-assessment.component.html',
  styleUrls: ['./proposal-assessment.component.scss']
})
export class ProposalAssessmentComponent implements OnInit {

  assessmentForm !: FormGroup

  numbers = [1,2,3,4,5]
  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit()
    
  }

  formInit() {
    this.assessmentForm = this.formBuilder.group({  
    })

    for(let i = 1; i < 4; i++) {
      this.assessmentForm.addControl(`question${i}`, new FormControl(0))
    }
  }

  get formValues () {
    return this.assessmentForm.value;
  }

}
