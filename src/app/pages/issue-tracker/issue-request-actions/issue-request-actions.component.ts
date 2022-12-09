import { Component, Input, OnInit } from '@angular/core';
import { data } from '../data';

@Component({
  selector: 'app-issue-request-actions',
  templateUrl: './issue-request-actions.component.html',
  styleUrls: ['./issue-request-actions.component.scss']
})
export class IssueRequestActionsComponent implements OnInit {

  listData = data;

  @Input() formData : any = null;

  constructor() { }

  ngOnInit(): void {
  }

}
