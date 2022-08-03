import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplementary-training',
  templateUrl: './supplementary-training.component.html',
  styleUrls: ['./supplementary-training.component.scss']
})
export class SupplementaryTrainingComponent implements OnInit {

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
