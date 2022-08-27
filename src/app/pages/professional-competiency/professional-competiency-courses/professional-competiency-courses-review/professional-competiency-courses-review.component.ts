import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-professional-competiency-courses-review',
  templateUrl: './professional-competiency-courses-review.component.html',
  styleUrls: ['./professional-competiency-courses-review.component.scss']
})
export class ProfessionalCompetiencyCoursesReviewComponent implements OnInit {

  breadCrumbItems!: Array<{}>;

  constructor(
    private router : Router,
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Professional Competiency - Courses", link: '/professional-competiency/courses'},
      { label: "Course Review Requests", active : true }
    ];
  }

  onNavigate(url : any) {
    this.modalService.dismissAll();
    this.router.navigateByUrl(url);
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }
}
