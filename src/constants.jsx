import { Icon } from '@iconify/react';

export const SIDENAV_ITEMS = [
  {
    title: 'Home',
    path: '/Homepage',
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },
  {
    title: 'Monitor',
    path: '/Light',
    icon: <Icon icon="lucide:monitor" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      { title: 'Light', path: '/Light' },
      { title: 'Fan', path: '/Fan' },
    ],
  },
  {
    title: 'Statistics',
    path: '/Stat',
    icon: <Icon icon="lucide:line-chart" width="24" height="24" />,
  },
  
  //   title: 'Notifications',
  //   path: '/notification',
  //   icon: <Icon icon="lucide:notification" width="24" height="24" />,
  // },
  {
    title: 'Sign out',
    path: '/Logout',
    icon: <Icon icon="lucide:log-out" width="24" height="24" />,
  },
];
