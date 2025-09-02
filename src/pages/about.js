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
  Container,
  Grid,
  Divider,
  Paper,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const aboutContent = [
  {
    title: 'Vision',
    details: `Our vision of Jesus training is based on God’s vision shown in Habakkuk 2:14: For the earth will be filled with the knowledge of the glory of the Lord as the waters cover the sea [ESV]. God proclaimed that the earth would be filled with the knowledge of the glory of the Lord. What is the knowledge of the glory of the Lord? It is knowing Jesus who is the radiance of the glory of God and the exact imprint of his nature [Heb 1:3, ESV]. What does the earth cover? It covers every nation, all tribes and peoples and languages [Rev 7:9, ESV]. This is our vision from God’s vision: We want to see all nations, tribes and peoples and languages see the glory of Jesus. We call this vision ‘Coverage Vision’. How do we realize this vision? Look at the ‘Strategy’ section.`,
  },
  {
    title: 'Strategy',
    details: `Our core strategies are twofold: 1) Raising workers from the field and 2)  Helping them grow so that they raise more workers even in different tribes in different nations. Jesus training is focused on finding a faithful worker who may not know the Bible well at the beginning but is obedient to the word of God. We follow the principles shown in Luke 10 to find such a person (person of peace). Once we find a person of peace, we teach them the word of God. If we see consistent obedience, we train them to grow as a worker from the stage of doing an evangelism to the stage of being an international missionary. Between those stages, our training is designed to help them planting house churches, forming a regional church, training other workers. You might want to ask ‘Does it really work?’ Yes. It works. Look at the ‘Fruits’ section.`,
  },
  {
    title: 'Fruits',
    details: `Jesus training started in India in 200x (?). As of June 2025, Jesus training took place xxx times. It produced xxx national (???) coordinators (international missionary), xxx yyy coordinators (….), 
. We believe that fruits that we saw come from our unique training methodologies. Look at the ‘Training Methodologies’ section.`,
  },
  {
    title: 'Training Methodologies',
    details: ``,
  },
  {
    title: 'Faith',
    details: ``,
  },
  {
    title: 'Leadership',
    details: ``,
  },
  {
    title: 'Global Teams',
    details: ``,
  },
];

export function About() {
  const sectionRefs = useRef([]);

  if (sectionRefs.current.length !== aboutContent.length) {
    sectionRefs.current = Array(aboutContent.length)
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
        <Box key={aboutContent.id} id={aboutContent.id} sx={{ mb: 6 }}>
          {aboutContent.map((item, index) => (
            <Accordion key={index} defaultExpanded={index === 0}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                ref={sectionRefs.current[index]}
              >
                <Typography fontWeight="bold">{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.details}</Typography>
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
          <Paper elevation={2} sx={{ p: 2 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
                Contents
            </Typography>
            <Divider sx={{ width: '100%', mb: 2 }} />
            <List dense>
                {aboutContent.map((item, index) => (
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

export default About;