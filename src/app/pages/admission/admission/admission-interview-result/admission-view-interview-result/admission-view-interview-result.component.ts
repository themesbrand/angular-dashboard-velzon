import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { data } from './data';

@Component({
  selector: 'app-admission-view-interview-result',
  templateUrl: './admission-view-interview-result.component.html',
  styleUrls: ['./admission-view-interview-result.component.scss']
})
export class AdmissionViewInterviewResultComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  listData = data;
  evaluationForm !: FormGroup

  interviewsTotalAccumulatedTotal : any[] = [];

  constructor(private formBuilder : FormBuilder, private router : Router) { }

  ngOnInit(): void {
    this.formInit()
    this.breadCrumbItems = [
      { label: "Dashboard", link: '/interviewer/dashboard'},
      { label: "Applicant Interview Evaluation Form", active : true }
    ];
    this.generateResultDate() 
  }

  generateResultDate() {
    this.listData.resultData.forEach((element: any, index : any) => {
      const average = (element.objects[0] + element.objects[1] + element.objects[2])/3
      this.listData.resultData[index].average = Math.round(average * 100) /100
    });
    console.log(this.listData.resultData)

    for(let i =0; i < 3; i++) {
      let total = 0;
      this.listData.resultData.forEach((element: any, index : any) => {
        if(element.objects[i]) {
          total = total + element.objects[i];
        }
      });
      this.interviewsTotalAccumulatedTotal.push(total)
    }
  }

  formInit() {
    this.evaluationForm = this.formBuilder.group({  
    })

    for(let i = 0; i < 14; i++) {
      this.evaluationForm.addControl(`question${i}`, new FormControl(0))
    }
    console.log(this.evaluationForm.value)
  }

  get formValues () {
    return this.evaluationForm.value;
  }

  navigateBack() {
    this.router.navigateByUrl('/interviewer/dashboard')
  }

}
