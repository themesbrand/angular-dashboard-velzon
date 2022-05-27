import { Countries } from "src/app/shared/data/countries";


const _countries = new Countries();

const _studentSelectorList = {
    programSelector : [
        { name: 'BSM (2 Years' },
        { name: 'Bachelor of Computer Application' },
        { name: 'BSC Physics' },
        { name: 'BSC Nano Technology' },
        { name: 'BSC Information Technology' },
      ],
      studentGroupSelector : [
        { name: 'Group A' },
        { name: 'Group B' },
        { name: 'Group C' },
      ],
      studentFeeCategorySelector : [
        { name: 'Credit Base' },
        { name: 'General' },
        { name: 'Management' },
      ],
      genderSelector : [
        { name: 'Male' },
        { name: 'Female' }
      ],
      nationalitySelector : _countries.getListOfNationalities(),
      belongingQuota : [
        { name: 'All India Open' },
        { name: 'Foreign' },
        { name: 'NRI' },
        { name: 'Single Girl Child' }
      ],
      admissionTakenQuotaCategory : [
        { name: 'OPEN' },
        { name: 'RESERVED' },
        { name: 'SUPERNUMERARY' }
      ],
      admissionTakenQuota : [
        { name: 'Kashmiri Migrants' },
        { name: 'Outstanding Sports Person' },
        { name: 'Single Girl Child' },
        { name: 'NRI' }
      ],
      martialStatus : [
        { name: 'Divorced' },
        { name: 'Single' },
        { name: 'Married' },
        { name: 'Widowed' }
      ],
      domicile : [
        { name: 'Harynana' },
        { name: 'Other' }
      ],
      status : [
        { name: 'Fail' },
        { name: 'Pass' }
      ],
}

export { _studentSelectorList };
