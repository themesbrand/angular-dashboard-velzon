import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-procedure',
  templateUrl: './log-procedure.component.html',
  styleUrls: ['./log-procedure.component.scss']
})
export class LogProcedureComponent implements OnInit {

  breadCrumbItems!: Array<{}>;

  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Log Procedure", active : true }
    ];
  }

}
