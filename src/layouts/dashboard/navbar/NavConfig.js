// routes
import { PATH_DASHBOARD } from '../../../routes/paths';

// ----------------------------------------------------------------------

const navConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: '',
    items: [
      { title: 'Home', path: PATH_DASHBOARD.myscrims },
      { title: 'Scrims', path: PATH_DASHBOARD.myscrims },
      { title: 'Recruitment Tools', path: PATH_DASHBOARD.myscrims },
      { title: 'My Teams', path: PATH_DASHBOARD.myscrims },
      { title: 'Overwatch Data', path: PATH_DASHBOARD.myscrims },
      {
        title: 'Events',
        path: '/',
        children: [
          { title: 'Champria Chillin\'', path: PATH_DASHBOARD.myscrims },
          { title: 'Champria Challenge', path: PATH_DASHBOARD.myscrims },
          { title: 'SoS Spring 2022', path: PATH_DASHBOARD.myscrims },
        ],
      },
      { title: 'About', path: PATH_DASHBOARD.myscrims },
      { title: 'Blog', path: PATH_DASHBOARD.myscrims },
      { title: 'Contact Us', path: PATH_DASHBOARD.myscrims },
    ],
  },
];

export default navConfig;
