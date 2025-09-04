import React, { useRef } from 'react';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Paper,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const trainingContent = [
  {
    title: 'Growth Path',
    details: `* Believer
    * Evangelist
    * Worker
    * Leader
   ` 
  },
  {
    title: '1 Day Training: Evangelism Training',
    details: ``,
  },
  {
    title: '5 Day Training',
    details: ``,
  },
  {
    title: '1 Month Training',
    details: `* Training for trainer
    * Training for coordinators
    `,
  },
  {
    title: 'Resources',
    details: `* Vision planning (Planning template file)
    * 10 commandments
    * 50 Bible Stories
    * Lecture material
    `,
  },
];

export function Training() {
  const sectionRefs = useRef([]);

  if (sectionRefs.current.length !== trainingContent.length) {
    sectionRefs.current = Array(trainingContent.length)
      .fill()
      .map((_, i) => sectionRefs.current[i] || React.createRef());
  }
  const scrollToSection = (index) => {
    sectionRefs.current[index].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
    <Typography variant="h3" fontWeight="bold" gutterBottom>
        About Jesus Training
    </Typography>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        px: { xs: 2, sm: 4, md: 6 },
        py: 6,
        gap: 4,
      }}
    >
      <Box sx={{ flex: 2 }}>
        <Box key={trainingContent.id} id={trainingContent.id} sx={{ mb: 6 }}>
          {trainingContent.map((item, index) => (
            <Accordion
              key={index}
              defaultExpanded={index === 0}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                borderRadius: 2,
                mb: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                ref={sectionRefs.current[index]}
              >
                <Typography fontWeight="bold">{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ whiteSpace: 'pre-line' }}>
                  {item.details}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
      <Box
            sx={{
            flex: 1,
            minWidth: '200px',
            position: 'sticky',
            top: 100,
            alignSelf: 'flex-start',
            }}
      >
          <Paper
            elevation={2}
            sx={{
              p: 2,
              backgroundColor: '#f8f5f0',
              borderRadius: 2,
              border: '1px solid #ddd',
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
                Contents
            </Typography>
            <Divider sx={{ width: '100%', mb: 2 }} />
            <List dense>
                {trainingContent.map((item, index) => (
                <ListItem key={index} disablePadding>
                    <ListItemButton
                    onClick={() => scrollToSection(index)} // scroll on click
                    sx={{
                        borderRadius: 1,
                        py: 1,
                        px: 2,
                        width: '100%',
                    }}
                    >
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
          </Paper>
        </Box>
    </Box>
    </>
  );
}

export default Training;