import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {data} from './data'

@Component({
  selector: 'app-meeting-view',
  templateUrl: './meeting-view.component.html',
  styleUrls: ['./meeting-view.component.scss']
})
export class MeetingTableViewComponent implements OnInit {

  listData = data;

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }


  viewMeeting(meeting : any) {
    this.router.navigateByUrl('/meeting-management/view', {
      state : { meetingObject : meeting }
    })
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }

}
