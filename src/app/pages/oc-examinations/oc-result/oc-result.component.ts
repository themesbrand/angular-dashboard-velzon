import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-oc-result',
  templateUrl: './oc-result.component.html',
  styleUrls: ['./oc-result.component.scss']
})
export class OcResultComponent implements OnInit {

  userRole: string | null = null;

  constructor (
    private router : Router
  ) { }

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userType');
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }


}
