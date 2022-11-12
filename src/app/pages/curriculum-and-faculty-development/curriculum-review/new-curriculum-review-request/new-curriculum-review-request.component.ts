import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-curriculum-review-request',
  templateUrl: './new-curriculum-review-request.component.html',
  styleUrls: ['./new-curriculum-review-request.component.scss']
})
export class NewCurriculumReviewRequestComponent implements OnInit {

  supportingFiles: any [] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  onRemove(event : any, type: any) {
    switch(type) {
      case 'supportingFiles' : {
        this.supportingFiles.splice(this.supportingFiles.indexOf(event), 1);
        return
      }
      default : {
        break;
      }
    }
  }

  onSelect(event : any, type: any) {
    switch(type) {
      case 'supportingFiles' : {
        this.supportingFiles = []
        this.supportingFiles.push(...event.addedFiles);
        return
      }
      default : {
        break;
      }
    }
  }

}
