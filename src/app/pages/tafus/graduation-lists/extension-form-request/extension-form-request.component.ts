import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { Countries } from "src/app/enums/countries";

@Component({
  selector: 'app-extension-form-request',
  templateUrl: './extension-form-request.component.html',
  styleUrls: ['./extension-form-request.component.scss']
})
export class ExtensionFormRequestComponent implements OnInit {

  @Input() formRequest : any;
  @Input() isViewOnly : boolean = false;
  
  countryList = Countries.countryList;
  
  requestForm !: FormGroup
  
  files: File[] = [];

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.requestForm = this.formBuilder.group({
      internationalAwards : new FormArray([]),
      publishedResearch : new FormArray([]),
      otherAchievements : new FormArray([])
    })

    if(this.formRequest.internationalAwards === null) {
      this.addInternationalAwards();
      this.addPublishedResearch();
      this.addOtherAchievements();
    }
  }

  get formValues () {
    return this.requestForm.value
  }

  get internationalAwardsControls () {
    return (<FormArray>this.requestForm.get('internationalAwards')).controls;
  }

  get publishedResearchControls () {
    return (<FormArray>this.requestForm.get('publishedResearch')).controls;
  }

  get otherAchievementsControls () {
    return (<FormArray>this.requestForm.get('otherAchievements')).controls;
  }

  addInternationalAwards() {
    (<FormArray>this.requestForm.get('internationalAwards')).push(
      new FormGroup({
        award : new FormControl(null, []),
        country : new FormControl(null, []),
        date : new FormControl(null, []),
      })
    );
  }

  onDeleteInternationalAwards(index : number) {
    if((<FormArray>this.requestForm.get('internationalAwards')).length != 1) {
      (<FormArray>this.requestForm.get('internationalAwards')).removeAt(index);
    }
  }

  addPublishedResearch() {
    (<FormArray>this.requestForm.get('publishedResearch')).push(
      new FormGroup({
        titleOfResearch : new FormControl(null, []),
        date : new FormControl(null, []),
        journalName : new FormControl(null, []),
      })
    );
  }

  onDeletePublishedResearch(index : number) {
    if((<FormArray>this.requestForm.get('publishedResearch')).length != 1) {
      (<FormArray>this.requestForm.get('publishedResearch')).removeAt(index);
    }
  }

  addOtherAchievements() {
    (<FormArray>this.requestForm.get('otherAchievements')).push(
      new FormGroup({
        achievement : new FormControl(null, []),
        date : new FormControl(null, []),
        remark : new FormControl(null, []),
      })
    );
  }

  onDeleteOtherAchievements(index : number) {
    if((<FormArray>this.requestForm.get('otherAchievements')).length != 1) {
      (<FormArray>this.requestForm.get('otherAchievements')).removeAt(index);
    }
  }


  
  onRemove(event : any, type: any) {
    switch(type) {
      case 'filesBLSCertificate' : {
        this.files.splice(this.files.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }
  onSelect(event : any, type: any) {
    switch(type) {
      case 'files' : {
        this.files.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }


}
