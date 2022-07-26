import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-simulation-courses',
  templateUrl: './application-simulation-courses.component.html',
  styleUrls: ['./application-simulation-courses.component.scss']
})
export class ApplicationSimulationCoursesComponent implements OnInit {

  userDetails: any = {
    'residencyStatus' : 'Omani National',
    'isOmsbMember' : 'true',
    'membershipType' : 'Staff',
    'isEmployed' : 'true',

    
    'firstName' : 'Abbas',
    'thirdName' : 'Al',
    'familyName' : 'Ajmi',
    'fullNameInArabic' : 'عباس أل أجمع',
    'gender' : 'male',
    'nationality' : 'Omani',
    'birthDate' : '1984-09-15',
    'email' : 'abbas@gmail.com',
    'contactNumber' : '132153213',
    
    'idNumber' : '97513256',
    // 'idLinkFront' : '',
    // 'idLinkBack' : '',
    'passportNumber' : '26934345',
    // 'passportLink' : '',
    'staffIdOrWorkId' : '24651923',
    // 'staffIdLink' : '',

    'profession' : 'Doctor',
    'primarySpecialty' : 'Medical',
    // 'ifOtherPrimarySpecialty' : '',
    'secondarySpecialty' : 'Other',
    'ifOtherSecondarySpecialty' : 'Other',
    'jobTitle' : 'OPD Consultant Doctor',
    'primaryWorkplaceSectorType' : 'Government',
    'primarySectorName' : 'Diwan Medical Service',
    // 'ifOtherPrimarySector' : '',
    'regionOfPrimaryWorkplace' : 'Value 1',
    // 'ifOtherRegionOfPrimaryWorkplace' : '',
    'secondaryWorkplaceSectorType' : 'Non-Applicable',
    // 'secondarySectorName' : '',
    // 'ifOtherSecondarySectorName' : '',

    'education' : [
      {'qualification' : 'BSC', 
      'country' : 'Oman', 
      'universityOrInstitution': 'Other', 
      'ifOtherUniversityOrInstitution' : 'Dhofar University',
      'graduationYear' : '2015'}
    ],
    
    'dataflowRef' : '#SC56-513213548',
    // 'confirmationToggleOne' : '',
    // 'confirmationToggleTwo' : '',
    // 'confirmationToggleThree' : '',
    // 'confirmationToggleFour' : '',
    // 'confirmationToggleFive' : ''   
  };

  
  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  onNavigate(url : any) {
    this.router.navigateByUrl(url)
  }

}
