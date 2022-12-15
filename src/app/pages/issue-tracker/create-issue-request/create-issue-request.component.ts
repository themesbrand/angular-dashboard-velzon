import { Component, OnInit } from '@angular/core';
import { data } from '../data';

@Component({
  selector: 'app-create-issue-request',
  templateUrl: './create-issue-request.component.html',
  styleUrls: ['./create-issue-request.component.scss']
})
export class CreateIssueRequestComponent implements OnInit {

  listData = data;

  issueLevel1 : any = null;
  issueLevel2 : any = null;
  issueLevel3 : any = null;

  files: File[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onRemove(event : any) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  onSelect(event : any) {
    this.files.push(...event.addedFiles);

  }

}
