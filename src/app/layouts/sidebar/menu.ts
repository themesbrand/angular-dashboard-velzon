import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'Menu',
    isTitle: true
  },
  {
    id: 2,
    label: 'Dashboard',
    icon: 'ri-dashboard-line',
    link: '/'
  },
  {
    id: 3,
    label: 'Graduate Medical Education',
    icon: 'ri-file-user-line',
    link: 'student-rr'    
  },
  {
    id: 10,
    label: 'Trainee Affair',
    icon: 'ri-file-paper-line',
    link: '/student-rr'
  },
  {
    id: 11,
    label: 'Resident Management',
    icon: 'ri-add-box-fill',
    link: '/student-rr'
  },
  {
    id: 12,
    label: 'Scholarship and International Relationships',
    icon: 'ri-calendar-event-line',
    link: '/student-rr'
  },
  {
    id: 13,
    label: 'Medical Simulation',
    icon: 'ri-book-3-line',
    link: '/student-rr'
  },
  {
    id: 14,
    label: 'Finance System',
    icon: 'ri-virus-line',
    link: '/student-rr'
  },
  {
    id: 15,
    label: 'Additional Processes',
    icon: 'ri-survey-line',
    link: '/student-rr'
  },
  {
    id: 16,
    label: 'Professional Competency',
    icon: 'ri-survey-line',
    link: '/student-rr'
  },
  {
    id: 17,
    label: 'Continuing Professional Development ',
    icon: 'ri-survey-line',
    link: '/student-rr'
  }
];
