import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'MENUITEMS.MENU.TEXT',
    isTitle: true
  },
  {
    id: 2,
    label: 'MENUITEMS.DASHBOARD.TEXT',
    icon: 'ri-dashboard-line',
    link: '/'
  },
  {
    id: 3,
    label: 'Affiliation',
    icon: 'ri-account-circle-line',
    link: '/affiliation'
  },
  {
    id: 4,
    label: 'Student RR',
    icon: 'ri-file-user-line',
    link: '/student-rr'
  },
  {
    id: 5,
    label: 'Notification',
    icon: 'ri-notification-3-fill',
    subItems: [
      {
        id: 6,
        label: 'Result Notification',
        link: '/advance-ui/sweetalerts',
        parentId: 5
      },
      {
        id: 7,
        label: 'Notification',
        icon: 'ri-notification-badge-line',
        parentId: 5
      }
    ]
  },
  {
    id: 8,
    label: 'University Exam',
    icon: 'ri-file-paper-line',
    link: '/student-rr'
  },
  {
    id: 9,
    label: 'Admission',
    icon: 'ri-add-box-fill',
    link: '/student-rr'
  },
  {
    id: 10,
    label: 'Events',
    icon: 'ri-calendar-event-line',
    link: '/student-rr'
  },
  {
    id: 11,
    label: 'Subjects',
    icon: 'ri-book-3-line',
    link: '/student-rr'
  },
  {
    id: 12,
    label: 'COVID Dashboard',
    icon: 'ri-virus-line',
    link: '/student-rr'
  },
  {
    id: 13,
    label: 'Final Mark Card',
    icon: 'ri-survey-line',
    link: '/student-rr'
  },
];
