import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { 
  Box, Stack, AppBar, Toolbar, Typography, TextField,
  Button, 
} from '@mui/material';
// hooks
import useOffSetTop from '../../../hooks/useOffSetTop';
import useResponsive from '../../../hooks/useResponsive';
// utils
import cssStyles from '../../../utils/cssStyles';
// config
import { HEADER, NAVBAR } from '../../../config';
// components
import Logo from '../../../components/Logo';
import Iconify from '../../../components/Iconify';
import { IconButtonAnimate } from '../../../components/animate';
//
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import NotificationsPopover from './NotificationsPopover';

// ----------------------------------------------------------------------

const RootStyle = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'isCollapse' && prop !== 'isOffset' && prop !== 'verticalLayout',
})(({ isCollapse, isOffset, verticalLayout, theme }) => ({
  ...cssStyles(theme).bgBlur(),
  boxShadow: 'none',
  height: HEADER.MOBILE_HEIGHT,
  zIndex: theme.zIndex.appBar + 1,
  transition: theme.transitions.create(['width', 'height'], {
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up('lg')]: {
    height: HEADER.DASHBOARD_DESKTOP_HEIGHT,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH + 1}px)`,
    ...(isCollapse && {
      width: `calc(100% - ${NAVBAR.DASHBOARD_COLLAPSE_WIDTH}px)`,
    }),
    backgroundColor: '#5225A7',
    ...(isOffset && {
      height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
    }),
    ...(verticalLayout && {
      width: '100%',
      height: HEADER.DASHBOARD_DESKTOP_OFFSET_HEIGHT,
      backgroundColor: theme.palette.background.default,
    }),
  },
}));

// ----------------------------------------------------------------------

DashboardHeader.propTypes = {
  onOpenSidebar: PropTypes.func,
  isCollapse: PropTypes.bool,
  verticalLayout: PropTypes.bool,
};

export default function DashboardHeader({ onOpenSidebar, isCollapse = false, verticalLayout = false }) {
  const isOffset = useOffSetTop(HEADER.DASHBOARD_DESKTOP_HEIGHT) && !verticalLayout;

  const isDesktop = useResponsive('up', 'lg');

  return (
    <RootStyle isCollapse={isCollapse} isOffset={isOffset} verticalLayout={verticalLayout}>
      <Toolbar
        sx={{
          minHeight: '100% !important',
          px: { lg: 5 },
          flexDirection: 'column',
        }}
      >
        <Box width="100%" display="flex" justifyContent="flex-end" py={2}>
          {isDesktop && verticalLayout && <Logo sx={{ mr: 2.5 }} />}

          {!isDesktop && (
            <IconButtonAnimate onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
              <Iconify icon="eva:menu-2-fill" />
            </IconButtonAnimate>
          )}

          <Box sx={{ flexGrow: 1 }} />

          <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
            <Searchbar />
            <NotificationsPopover />
            <AccountPopover />
          </Stack>
        </Box>
        <Stack width="100%" spacing={1}>
          <Typography variant='h3'>
            My Scrims
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <TextField
              select
              SelectProps={{ native: true }}
              sx={{
                '& fieldset': { border: '0 !important' },
                '& select': { pl: 2, py: 1, pr: '30px !important', typography: 'subtitle2' },
                '& .MuiOutlinedInput-root': { borderRadius: 0.75, bgcolor: 'transparent', border: '2px solid #FFF', color: 'common.white' },
                '& .MuiNativeSelect-icon': { top: 9, right: 4, width: 20, height: 20, color: 'common.white' },
              }}
            >
              <option value=''>
                Team Name
              </option>
            </TextField>
            <Button variant="contained" color="info">
              Create Scrim
            </Button>
          </Stack>
        </Stack>
      </Toolbar>
    </RootStyle>
  );
}
