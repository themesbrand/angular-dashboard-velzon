import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-professional-competiency-add-sme-team',
  templateUrl: './professional-competiency-add-sme-team.component.html',
  styleUrls: ['./professional-competiency-add-sme-team.component.scss']
})
export class ProfessionalCompetiencyAddSmeTeamComponent implements OnInit {

  smeTeam = [
    {
        firstName : 'Madan',
        secondName : 'Ali',
        lastName : 'Khan',
        email : "Madan@email.com",
        phoneNumber : '+968456789',
        position : 'Doctor',
        civilID : '789465312',
        institution : 'Khoula Hospital',
        isTeamRapporteur : true,
        isTeamChair : true
    }, 
    {
        firstName : 'Faisal',
        secondName : 'Ali',
        lastName : 'Gawas',
        email : "Faisal@email.com",
        phoneNumber : '+968456789',
        position : 'Doctor',
        civilID : '7987412358',
        institution : 'Khoula Hospital',
        isTeamRapporteur : true,
        isTeamChair : true
    }
  ]

  SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.Oman];

  constructor(
    private modalService : NgbModal
  ) { }

  ngOnInit(): void {
  }

  openModal(modal :any, size : any) {
    this.modalService.open(modal, {size : size})
  }

}
