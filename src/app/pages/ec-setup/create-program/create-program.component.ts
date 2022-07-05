import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import {data} from '../data';

@Component({
  selector: 'app-create-program',
  templateUrl: './create-program.component.html',
  styleUrls: ['./create-program.component.scss']
})
export class CreateProgramComponent implements OnInit {

  listData = data;

  breadCrumbItems!: Array<{}>;
  public Editor = ClassicEditor;

  todayDate : Date = new Date();
  programForm !: FormGroup;

  basicTrainingDurations: any[] = []

  filesCurriculum: File[] = [];
  filesGallery: File[] = [];

  constructor(private router : Router, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "EC Setup", link: '/ec-setup'},
      { label: "Create Program", active : true }
    ];
    this.formInit();
  }

  formInit() {
    this.programForm = this.formBuilder.group({
      'programCode' : new FormControl('', []),
      'programName' : new FormControl('', []),
      'programDescription' : new FormControl('', []),
      'programEstablishDate' : new FormControl(null, []),
      'vision' : new FormControl('', []),
      'mission' : new FormControl('', []),
      'durationOfProgram' : new FormControl(null, []),
      'basicLevel' : new FormControl(null, []),
      'advanceLevel' : new FormControl(null, []),
      'totalBlock' : new FormControl(null, []),
      'curriculaDocumentLink' : new FormControl(null, []),
      'programGalleryLinks' : new FormControl([], [])
    })
  }

  get form() {
    return this.programForm.value
  }

  navigateBack() {
    this.router.navigateByUrl('/ec-setup')
  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'filesCurriculum' : {
        this.filesCurriculum.splice(this.filesCurriculum.indexOf(event), 1);
        return
      }
      case 'filesGallery' : {
        this.filesGallery.splice(this.filesGallery.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }
  onSelect(event : any, type: any) {
    switch(type) {
      case 'filesCurriculum' : {
        this.filesCurriculum.push(...event.addedFiles);
        return
      }
      case 'filesGallery' : {
        this.filesGallery.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }

  onChangeDurationOfProgram() {
    this.basicTrainingDurations = []
    this.programForm.get('basicLevel')?.patchValue(null)
    this.programForm.get('advanceLevel')?.patchValue(null)
    this.listData.programDurations.forEach(o => {
      if(o.value <= this.programForm.get('durationOfProgram')?.value) {
        this.basicTrainingDurations.push(o)
      }   
    })

  }

  onChangeBasicLevel() {
    let year = this.form.durationOfProgram - this.form.basicLevel
    let yearString = '0 years'
    if(year === 1) {
      yearString = year.toString() + " year"
    } else if (year > 1) {
      yearString = year.toString() + " years"
    } 
    this.programForm.get('advanceLevel')?.patchValue(yearString)

    this.programForm.get('totalBlock')?.patchValue(this.form.durationOfProgram * 13)
    
  }

}
