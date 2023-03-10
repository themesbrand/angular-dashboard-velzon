import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { data } from './data';

@Component({
  selector: 'app-admission-setup-evaluation-form',
  templateUrl: './admission-setup-evaluation-form.component.html',
  styleUrls: ['./admission-setup-evaluation-form.component.scss']
})
export class AdmissionSetupEvaluationFormComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  listData = data;
  evaluationForm !: FormGroup

  constructor(private formBuilder : FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.formInit()
    this.breadCrumbItems = [
      { label: "Dashboard", link: '/interviewer/dashboard'},
      { label: "Applicant Interview Evaluation Form", active : true }
    ];
  }

  formInit() {
    this.evaluationForm = this.formBuilder.group({  
    })

    for(let i = 1; i < 8; i++) {
      this.evaluationForm.addControl(`question${i}`, new FormControl(0))
    }
    console.log(this.evaluationForm.value)
  }

  get formValues () {
    return this.evaluationForm.value;
  }

  navigateBack() {
    this.router.navigateByUrl('/admission/admission/admission-setup')
  }

}
