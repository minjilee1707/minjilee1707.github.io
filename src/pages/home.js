import { Box, Typography, Paper, Container, Grid } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import image1 from '../images/home_image1.jpeg';
import image2 from '../images/home_image2.jpeg';
import image3 from '../images/home_image3.jpeg';
import image4 from '../images/home_image4.jpeg';
import image5 from '../images/home_image5.jpeg';
import image6 from '../images/home_image6.jpeg';
import image7 from '../images/home_image7.jpeg';
import image8 from '../images/home_image8.jpeg';
import image9 from '../images/home_image9.jpeg';

export function Home() {

const itemData = [
  { img: image1, title: 'Image 1' },
  { img: image2, title: 'Image 2' },
  { img: image3, title: 'Image 3' },
  { img: image4, title: 'Image 4' },
  { img: image5, title: 'Image 5' },
  { img: image6, title: 'Image 6' },
  { img: image7, title: 'Image 7' },
  { img: image8, title: 'Image 8' },
  { img: image9, title: 'Image 9' },
];

  return (
    <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="80vh"
        textAlign="center"
        sx={{
            background: 'linear-gradient(to right, #f5f2eb, #e7dfd5)',
            color: '#5c504b', // soft brown for readable contrast
            py: 8,
            textAlign: 'center',
        }}
    >
        <Paper
            elevation={3}
            sx={{
                p: 5,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRadius: 4,
                boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
                maxWidth: 800,
                width: '100%',
                textAlign: 'center',
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    fontWeight: 'bold',
                    color: '#4A403A', // soft brown
                    mb: 2,
                    letterSpacing: 1,
                }}
            >
                Welcome to Jesus Training
            </Typography>
            <Typography
                variant="h6"
                sx={{
                    color: '#7D7463',
                    maxWidth: '80%',
                    mx: 'auto',
                    fontWeight: 400,
                }}
            >
                For covering All Nations with the Glory of God
            </Typography>
            <Box display="flex" justifyContent="center">
                <ImageList sx={{ width: 500 }} cols={3} rowHeight={164}>
                    {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                            style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover', // This ensures square crop
                            borderRadius: 8,
                            }}
                        />
                    </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Paper>
        <Box sx={{ backgroundColor: '#f0ece3', py: 4, mt: 6 }}>
        <Container>
            <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
                <Typography variant="h6">Contact</Typography>
                <Typography variant="body2">Email: info@jesustraining.org</Typography>
                <Typography variant="body2">Phone: +1 (123) 456-7890</Typography>
            </Grid>
            {/* More footer sections like About, Quick Links */}
            </Grid>
        </Container>
        </Box>
    </Box>
);
}

export default Home;