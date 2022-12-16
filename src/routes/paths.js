// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  myscrims: path('/', 'myscrims')
};

export const PATH_DOCS = 'https://docs-minimals.vercel.app/introduction';
