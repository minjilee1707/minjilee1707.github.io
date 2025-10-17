import {
  Card,
  CardContent,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
} from '@mui/material';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export function Events() {
const events = [
  { title: 'Januray Jesus Training',
    start: '2026-01-05',
    end: '2026-01-30',
    color: '#8B4513',
    audience: 'Missionaries, pastors, people working for mission in churches or organisations.'
  }
];

const sortedEvents = [...events].sort(
  (a, b) => new Date(a.start) - new Date(b.start)
);
const initialDate = sortedEvents[0]?.start || new Date().toISOString().split('T')[0];


function EventTable({ events }) {
  return (
    <Box sx={{ mb: 4 }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Event Name</strong></TableCell>
              <TableCell><strong>Who it's for</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {events.map((event, index) => (
              <TableRow key={index}>
                <TableCell>{event.title}</TableCell>
                <TableCell>{event.audience}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mt: 2 }}>
        <Typography variant="body1">
          Interested in getting involved?
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 1,
            backgroundColor: '#D2B48C', // light brown
            color: 'black',
            '&:hover': {
              backgroundColor: '#C19A6B',
            },
          }}
          href="mailto:gapseoul@gmail.com"
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
}

function EventsCalendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      initialDate={initialDate}
      events={events}
      height="auto"
    />
  );
}

  return (
    <>
    <Typography variant="h3" fontWeight="bold" gutterBottom>
        Upcoming Events
    </Typography>
    <Card>
      <CardContent>
        <EventTable events={events} />
        <EventsCalendar />
      </CardContent>
    </Card>
    </>
  );
}

export default Events;