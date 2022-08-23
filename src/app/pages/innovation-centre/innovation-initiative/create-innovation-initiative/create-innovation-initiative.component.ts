import { Component, Input, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-innovation-initiative',
  templateUrl: './create-innovation-initiative.component.html',
  styleUrls: ['./create-innovation-initiative.component.scss']
})
export class CreateInnovationInitiativeComponent implements OnInit {
  
  initiativeObject: any = null;
  initiativeStatus: any = null;
  mediaFiles: File[] = [];

  @Input('initiativeData') set setInitiative(data : any) {
    this.initiativeObject = data;
  }
  @Input('initiativeStatusData') set setInitiativeStatus(data : any) {
    this.initiativeStatus = data;
  }

  currentDate: Date = new Date();

  announceInitiativeForm !: FormGroup

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.announceInitiativeInit();
    if(this.initiativeObject != null) {
      this.announceInitiativeForm.patchValue(this.initiativeObject);
    }
  }

  announceInitiativeInit() {
    this.announceInitiativeForm = this.formBuilder.group({
      initiativeName : new FormControl(null),
      startDate : new FormControl(null),
      endDate : new FormControl(null),
      eligibility : new FormControl(null),
      terms : new FormControl(null),
      startDateOfAcceptingProposals : new FormControl(null),
      endDateOfAcceptingProposals : new FormControl(null),
      status: new FormControl(null),
    })
  }

  get announceInitiativeFormValues() {
    return this.announceInitiativeForm.value
  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'mediaFiles' : {
        this.mediaFiles.splice(this.mediaFiles.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }
  onSelect(event : any, type: any) {
    switch(type) {
      case 'mediaFiles' : {
        this.mediaFiles.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }

}
