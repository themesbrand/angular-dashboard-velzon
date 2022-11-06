import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-submit-program-form',
  templateUrl: './submit-program-form.component.html',
  styleUrls: ['./submit-program-form.component.scss']
})
export class SubmitProgramFormComponent implements OnInit {

  breadCrumbItems!: Array<{}>;
  public Editor = ClassicEditor;

  todayDate : Date = new Date();
  programForm !: FormGroup;

  basicTrainingDurations: any[] = []

  filesCurriculum: File[] = [];
  filesGallery: File[] = [];


  programDurations = [
    {name: '1 Year', value : '1'},
    {name: '2 Year', value : '2'},
    {name: '3 Year', value : '3'},
    {name: '4 Year', value : '4'},
    {name: '5 Year', value : '5'},
    {name: '6 Year', value : '6'},
    {name: '7 Year', value : '7'}
  ]

  constructor(private router : Router, private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Curriculum", link: '/curriculum'},
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
    this.router.navigateByUrl('/curriculum')
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
    this.programDurations.forEach(o => {
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
