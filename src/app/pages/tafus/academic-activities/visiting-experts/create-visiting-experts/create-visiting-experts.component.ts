import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-visiting-experts',
  templateUrl: './create-visiting-experts.component.html',
  styleUrls: ['./create-visiting-experts.component.scss']
})
export class CreateVisitingExpertsComponent implements OnInit {

  formObject: any = null;
  isViewOnly : boolean = false;

  cvFiles : File[] = [];

  @Input('formData') set formDateValues(data : any){
    console.log(data)
    this.formObject = data;
  }
  @Input('isViewOnly') set setViewOnly(data : any){
    this.isViewOnly = data;
  }

  
  requestForm !: FormGroup

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.formInit()

    if(this.formObject != null) {

      this.requestForm.patchValue(this.formObject)
      this.formObject?.speakers.forEach((element : any) => {
        
        (<FormArray>this.requestForm.get('speakers')).push(
          new FormGroup({
            name : new FormControl(element.name),
            
            tickets : new FormControl(element.tickets),
            visa : new FormControl(element.visa),
            accommodation : new FormControl(element.accommodation),
            foodAndNumberOfParticipates : new FormControl(element.foodAndNumberOfParticipates),
            honorarium : new FormControl(element.honorarium),
            venue : new FormControl(element.venue),
            transport : new FormControl(element.transport),
            register : new FormControl(element.register),
            eventPoster : new FormControl(element.eventPoster)
    
          })
        );

      });
      
    } else {
      this.addSpeakers();
    }
  }

  formInit() {
    this.requestForm = this.formBuilder.group({
      title : new FormControl(null),
      introduction : new FormControl(null),
      
      skills : new FormControl(null),
      attitudes : new FormControl(null),
      
      teachingMethods : new FormControl(null),
      evaluationMethods : new FormControl(null),
      
      speakers : new FormArray([])
    })

  }

  get formValues() {
    return this.requestForm.value;
  }

  get speakersControls() {
    return (<FormArray>this.requestForm.get('speakers')).controls;
  }

  addSpeakers() {
    (<FormArray>this.requestForm.get('speakers')).push(
      new FormGroup({
        name : new FormControl(null, []),
        
        tickets : new FormControl(null, []),
        visa : new FormControl(null, []),
        accommodation : new FormControl(null, []),
        foodAndNumberOfParticipates : new FormControl(null, []),
        honorarium : new FormControl(null, []),
        venue : new FormControl(null, []),
        transport : new FormControl(null, []),
        register : new FormControl(null, []),
        eventPoster : new FormControl(null, []),

      })
    );
  }

  onDeleteSpeakers(index : number) {
    if((<FormArray>this.requestForm.get('speakers')).length != 1) {
      (<FormArray>this.requestForm.get('speakers')).removeAt(index);
    }
  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'cvFiles' : {
        this.cvFiles.splice(this.cvFiles.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }

  onSelect(event : any, type: any) {
    switch(type) {
      case 'cvFiles' : {
        this.cvFiles = []
        this.cvFiles.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }

}
