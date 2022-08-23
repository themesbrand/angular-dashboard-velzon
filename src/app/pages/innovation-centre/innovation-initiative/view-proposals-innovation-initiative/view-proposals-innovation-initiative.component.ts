import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-proposals-innovation-initiative',
  templateUrl: './view-proposals-innovation-initiative.component.html',
  styleUrls: ['./view-proposals-innovation-initiative.component.scss']
})
export class ViewProposalsInnovationInitiativeComponent implements OnInit {
  isUpdateMilestone: any;

  @Input('isUpdateMilestone') set setIsUpdateMilestone(data : any) {
    this.isUpdateMilestone = data;
  }
  
  milestoneForm !: FormGroup;

  milestones : any[] = [
    {
      task : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quo illo eos pariatur quam, facilis officiis.',
      deadline : '2022-10-15'
    },
    {
      task : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, libero? Numquam corrupti maxime, molestiae voluptate veritatis accusantium hic dolorem!',
      deadline : '2022-10-16'
    },
  ]

  constructor(
    private formBuilder : FormBuilder
  ) { }

  ngOnInit(): void {
    this.milestoneFormInit();
    this.milestones.forEach(element => {
      (<FormArray>this.milestoneForm.get('planArray')).push(
        new FormGroup({
          task : new FormControl(element.task, []),
          deadline : new FormControl(element.deadline, []),
        })
      );
    })

  }

  milestoneFormInit() {
    this.milestoneForm = this.formBuilder.group({
      planArray : new FormArray([])
    })
  }

  get applicationFormValues() {
    return this.milestoneForm.value
  }


  get planControls() {
    return (<FormArray>this.milestoneForm.get('planArray')).controls;
  }

  addPlanArray() {
    (<FormArray>this.milestoneForm.get('planArray')).push(
      new FormGroup({
        task : new FormControl('', []),
        deadline : new FormControl('', []),
      })
    );
  }
  onDeletePlanArray(index : number) {
    if((<FormArray>this.milestoneForm.get('planArray')).length != 1) {
      (<FormArray>this.milestoneForm.get('planArray')).removeAt(index);
    }
  }
}
