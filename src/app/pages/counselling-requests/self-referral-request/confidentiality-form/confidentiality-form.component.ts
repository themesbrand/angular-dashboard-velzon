import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confidentiality-form',
  templateUrl: './confidentiality-form.component.html',
  styleUrls: ['./confidentiality-form.component.scss']
})
export class ConfidentialityFormComponent implements OnInit {
  breadCrumbItems!: Array<{}>;

  userName = 'Abbas Al Ajmi'
  
  constructor(private router : Router) { }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Self Referral", link : '/counselling/self-referral' },
      { label: "Confidentiality Declaration", active : true }
    ];
  }


  onNavigate() {
    this.router.navigateByUrl('/counselling/self-referral')
  }

}
