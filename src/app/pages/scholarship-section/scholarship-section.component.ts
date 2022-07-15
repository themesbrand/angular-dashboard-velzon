import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scholarship-section',
  templateUrl: './scholarship-section.component.html',
  styleUrls: ['./scholarship-section.component.scss']
})
export class ScholarshipSectionComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }
}
