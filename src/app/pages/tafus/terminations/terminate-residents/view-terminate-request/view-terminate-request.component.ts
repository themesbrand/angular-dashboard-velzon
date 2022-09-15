import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-terminate-request',
  templateUrl: './view-terminate-request.component.html',
  styleUrls: ['./view-terminate-request.component.scss']
})
export class ViewTerminateRequestComponent implements OnInit {

  selectedUser: any;
  requestData: any;

  @Input('selectedUser') set setSelectedUser(data : any) {
    this.selectedUser = data
  }

  @Input('requestData') set setRequestData(data : any) {
    this.requestData = data
  }

  constructor() { }

  ngOnInit(): void {
  }

}
