import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {data} from './data'

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure.component.html',
  styleUrls: ['./procedure.component.scss']
})
export class ProcedureComponent implements OnInit {

  listData = data;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onNavigate() {
    this.router.navigateByUrl('/curriculum/allocate-procedure')
  }

}
