import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confidentiality-form-two',
  templateUrl: './confidentiality-form-two.component.html',
  styleUrls: ['./confidentiality-form-two.component.scss']
})
export class ConfidentialityFormTwoComponent implements OnInit {

  breadCrumbItems!: Array<{}>;

  userName = 'Abbas Al Ajmi'
  referralUsers = ['Saleh Mahfoudh', 'Al Abri Falsal', 'Madan Khan']
  
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
