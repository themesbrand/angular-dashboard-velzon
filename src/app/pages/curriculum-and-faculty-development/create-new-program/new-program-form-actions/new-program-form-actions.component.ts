import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-program-form-actions',
  templateUrl: './new-program-form-actions.component.html',
  styleUrls: ['./new-program-form-actions.component.scss']
})
export class NewProgramFormActionsComponent implements OnInit {

  @Input() requestData : any = null;

  files: File[] = [];

  isFilterOpen : boolean = false

  traineeList : any[] = [
    {
      name : 'Madan Khan',
      email : 'Madan@email.com',
      civilId : '968351321321'
    },
    {
        name : 'Faisal Gawas',
        email : 'Gawas@email.com',
        civilId : '968351321321'
    }   
  ]

  taskForceList : any[] = []

  constructor() { }

  ngOnInit(): void {
  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'files' : {
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

  onSearch() {
    this.isFilterOpen = true;
  }
  
  onAddToTaskForce(row : any) {
    this.taskForceList .push(row)
  }
}
