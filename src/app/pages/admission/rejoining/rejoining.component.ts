import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rejoining',
  templateUrl: './rejoining.component.html',
  styleUrls: ['./rejoining.component.scss']
})
export class RejoiningComponent implements OnInit {

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
