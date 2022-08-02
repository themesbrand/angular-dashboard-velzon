import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import {data} from './data'

@Component({
  selector: 'app-admission-interview-evaluation-form',
  templateUrl: './admission-interview-evaluation-form.component.html',
  styleUrls: ['./admission-interview-evaluation-form.component.scss']
})
export class AdmissionInterviewEvaluationFormComponent implements OnInit {

  listData = data;
  evaluationForm !: FormGroup


  constructor(
    private formBuilder : FormBuilder, private router : Router
  ) { }

  ngOnInit(): void {    
    this.formInit()

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
