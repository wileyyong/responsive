import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Stack, Typography, IconButton, TextField } from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
// utils
import { fDate } from '../../../utils/formatTime';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// components
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const IconButtonStyle = styled(IconButton)(({ theme }) => ({
  border: '2px solid #666666',
  borderRadius: 6,
  padding: 0,
  color: theme.palette.common.white,
}));

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: theme.spacing(2.5),
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

const TextFieldStyle = styled(TextField)(() => ({
  '& .MuiInputBase-root': {
    height: '30px',
  }
}));

// ----------------------------------------------------------------------

CalendarToolbar.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onToday: PropTypes.func,
  onNextDate: PropTypes.func,
  onPrevDate: PropTypes.func,
};

export default function CalendarToolbar({ date, onToday, onNextDate, onPrevDate }) {
  const isDesktop = useResponsive('up', 'sm');

  return (
    <RootStyle>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography variant="h5">{fDate(date)}</Typography>
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <IconButtonStyle onClick={onPrevDate}>
            <Iconify icon="eva:arrow-ios-back-fill" width={20} height={20} />
          </IconButtonStyle>
          <IconButtonStyle onClick={onNextDate}>
            <Iconify icon="eva:arrow-ios-forward-fill" width={20} height={20} />
          </IconButtonStyle>
        </Stack>
      </Stack>

      {isDesktop && (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            value={date}
            onChange={() => {
              onToday();
            }}
            renderInput={(params) => <TextFieldStyle {...params} />}
          />
        </LocalizationProvider>
      )}
    </RootStyle>
  );
}
