import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import {data} from '../../data';


@Component({
  selector: 'app-trainee-performance-evauation-form',
  templateUrl: './trainee-performance-evauation-form.component.html',
  styleUrls: ['./trainee-performance-evauation-form.component.scss']
})
export class TraineePerformanceEvauationFormComponent implements OnInit {

  listData = data;

  requestForm !: FormGroup;

  constructor(private formBuilder : FormBuilder,private router : Router) { }

  ngOnInit(): void {
    this.requestFormInit();
    this.patchUserData();
  }
  
  requestFormInit() {
    this.requestForm = this.formBuilder.group({
      name : new FormControl(null),
      omsb : new FormControl(null),
      academicYear : new FormControl(null),
      trainingProgram : new FormControl(null),
      yearOfTraining : new FormControl(null),
      telephoneNumber : new FormControl(null),
      emailAddress : new FormControl(null),
      
      isTrained : new FormControl(null),
      traineeEfficiencyOrBehavior: new FormControl(null),
      traineeEfficiencyOrBehaviorDate: new FormControl(null),
      
      //.........................
      // attitudeTowardService: new FormControl(null),
      // adjustmentToTraining: new FormControl(null),
      // popularAmongSeniors: new FormControl(null),
      // popularAmongPeers: new FormControl(null),
      // popularAmongStaff: new FormControl(null),
      // capabilityMental: new FormControl(null),
      // capabilityPhysical: new FormControl(null),
      // Add the rest of the FormControl Name Accordingly
      //.........................

      hasInvolvedInViolations: new FormControl(null),



    })

  }

  get formValue () {
    return this.requestForm.value
  }


  patchUserData() {
    this.requestForm.patchValue(this.listData.userDetailsObject)
  }

}
