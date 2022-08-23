import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { WizardComponent } from 'angular-archwizard';
import { Countries } from 'src/app/enums/countries';
import { Nationalities } from 'src/app/enums/nationality';

import { data } from './data';
import {userDetails} from 'src/app/landing/application-forms/data';

@Component({
  selector: 'app-application-for-innovation-initiative',
  templateUrl: './application-for-innovation-initiative.component.html',
  styleUrls: ['./application-for-innovation-initiative.component.scss']
})
export class ApplicationForInnovationInitiativeComponent implements OnInit {

  userDetails: any = userDetails;

  progressBarSize:any = {
    width:'width:0%',
    value : 0 
  }

  applicationFormThree !: FormGroup;

  @ViewChild(WizardComponent) public wizard!: WizardComponent;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {

  }

  enterStep(step : any) {
    console.log(step)
    this.wizard.goToStep(step)
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
    if(step === 1) {
      this.progressBarSize = {
        width:'width:30%',
        value : 30 
      }
    }
    if(step === 2) {
      this.progressBarSize = {
        width:'width:60%',
        value : 60 
      }
    }
    
  }

}
