import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fc-view-member-request',
  templateUrl: './fc-view-member-request.component.html',
  styleUrls: ['./fc-view-member-request.component.scss']
})
export class FcViewMemberRequestComponent implements OnInit {

  @Input() isEditable : boolean = false;
  @Input() isSubmit : boolean = false;
  @Input() formRequest !: any;

  filesCovering: File[] = [];
  objectionLetter: File[] = [];

  requestForm !: FormGroup;
  
  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    console.log(this.isEditable)
    this.formInit();
    this.requestForm.patchValue(this.formRequest)
    console.log(this.requestForm.value)

  }

  formInit() {
    this.requestForm = this.formBuilder.group({
      name : new FormControl('' ,[]),
      email : new FormControl('' ,[]),
      civilId : new FormControl('' ,[]),
      trainingSite : new FormControl('' ,[]),
      position : new FormControl('' ,[]),
      ecSectionComments : new FormControl('' ,[]),
      ecSectionHeadComments : new FormControl('' ,[]),
      vppaComments : new FormControl('' ,[]),
      gmeDirectorComments : new FormControl('' ,[]),
      executivePresidentComments : new FormControl('' ,[]),
      commentsToApplicant : new FormControl('' ,[]),
      applicantDocuments : new FormControl('' ,[]),
      status : new FormControl('' ,[]),
    })
  }

  get formValues() {
    return this.requestForm.value;
  }
  
  onRemove(event : any, type: any) {
    switch(type) {
      case 'filesCovering' : {
        this.filesCovering.splice(this.filesCovering.indexOf(event), 1);
        return
      }
      case 'objectionLetter' : {
        this.objectionLetter.splice(this.objectionLetter.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }
  onSelect(event : any, type: any) {
    switch(type) {
      case 'filesCovering' : {
        this.filesCovering.push(...event.addedFiles);
        return
      }
      case 'objectionLetter' : {
        this.objectionLetter.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }

}
