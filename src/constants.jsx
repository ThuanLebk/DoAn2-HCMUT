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
    title: 'History',
    path: '/Log',
    icon: <Icon icon="lucide:history" width="24" height="24" />,
  },
  {
    title: 'Statistics',
    path: '/Stat',
    icon: <Icon icon="lucide:line-chart" width="24" height="24" />,
  },
];
