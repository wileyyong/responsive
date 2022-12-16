import FullCalendar from '@fullcalendar/react'; // => request placed at the top
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import timelinePlugin from '@fullcalendar/timeline';
import interactionPlugin from '@fullcalendar/interaction';
//
import { useState, useRef, useEffect } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Grid, Typography, Box, IconButton, Stack } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
import useResponsive from '../../hooks/useResponsive';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
// sections
import { CalendarStyle, CalendarToolbar } from '../../sections/@dashboard/calendar';
import ScrimReviewItem from '../../sections/myscrims/ScrimReviewItem';

// ----------------------------------------------------------------------

const IconButtonStyle = styled(IconButton)(({ theme }) => ({
  border: '2px solid #666666',
  borderRadius: 6,
  padding: 0,
  color: theme.palette.common.white,
}));

export default function MyScrims() {
  const { themeStretch } = useSettings();

  const isDesktop = useResponsive('up', 'sm');

  const calendarRef = useRef(null);

  const [date, setDate] = useState(new Date());

  const [view, setView] = useState(isDesktop ? 'timeGridWeek' : 'listWeek');

  useEffect(() => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      const newView = isDesktop ? 'timeGridWeek' : 'listWeek';
      calendarApi.changeView(newView);
      setView(newView);
    }
  }, [isDesktop]);

  const handleClickToday = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.today();
      setDate(calendarApi.getDate());
    }
  };

  const handleClickDatePrev = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.prev();
      setDate(calendarApi.getDate());
    }
  };

  const handleClickDateNext = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.next();
      setDate(calendarApi.getDate());
    }
  };

  const handleSelectRange = () => {
    const calendarEl = calendarRef.current;
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.unselect();
    }
  };

  const handleSelectEvent = () => {
  };

  const handleResizeEvent = async () => {
  };

  const handleDropEvent = async () => {
  };

  return (
    <Page title="Calendar">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8}>
            <CalendarStyle>
              <CalendarToolbar
                date={date}
                onNextDate={handleClickDateNext}
                onPrevDate={handleClickDatePrev}
                onToday={handleClickToday}
              />
              <FullCalendar
                weekends
                editable
                droppable
                selectable
                events={[
                  { title: 'Open Challenge', start: '2022-03-15T11:00:00', end: '2022-03-15T15:00:00', backgroundColor: '#7635EF', textColor: '#FFFFFF' },
                  { title: 'Actively Setting', start: '2022-03-17T11:00:00', end: '2022-03-17T15:00:00', backgroundColor: '#F21D64', textColor: '#FFFFFF' },
                  { title: 'Actively Setting', start: '2022-03-18T11:00:00', end: '2022-03-18T15:00:00', backgroundColor: '#F21D64', textColor: '#FFFFFF' },
                  { title: 'Actively Setting', start: '2022-03-19T11:00:00', end: '2022-03-19T15:00:00', backgroundColor: '#F21D64', textColor: '#FFFFFF' },
                ]}
                ref={calendarRef}
                rerenderDelay={10}
                initialDate={date}
                initialView={view}
                dayMaxEventRows={3}
                eventDisplay="block"
                headerToolbar={false}
                allDayMaintainDuration
                eventResizableFromStart
                select={handleSelectRange}
                eventDrop={handleDropEvent}
                eventClick={handleSelectEvent}
                eventResize={handleResizeEvent}
                height={isDesktop ? 720 : 'auto'}
                plugins={[listPlugin, dayGridPlugin, timelinePlugin, timeGridPlugin, interactionPlugin]}
              />
            </CalendarStyle>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Box width='100%' mt={4} mb={2} display="flex" alignItems="center">
              <Typography variant="h5">Scrim Review</Typography>
              <Box sx={{ flexGrow: 1 }} />
              <Stack spacing={1} direction="row">
                <IconButtonStyle>
                  <Iconify icon="eva:arrow-ios-upward-fill" width={20} height={20} />
                </IconButtonStyle>
                <IconButtonStyle>
                  <Iconify icon="eva:arrow-ios-downward-fill" width={20} height={20} />
                </IconButtonStyle>
              </Stack>
            </Box>
            <Stack spacing={1}>
              <ScrimReviewItem />
              <ScrimReviewItem checked />
              <ScrimReviewItem checked />
              <ScrimReviewItem viewMode />
              <ScrimReviewItem viewMode />
              <ScrimReviewItem viewMode />
              <ScrimReviewItem viewMode />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
