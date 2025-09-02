import { Box, Typography, Paper } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import image1 from '../images/KakaoTalk_Photo_2025-09-02-08-28-51.jpeg';
import image2 from '../images/KakaoTalk_Photo_2025-09-02-08-29-07.jpeg';
import image3 from '../images/KakaoTalk_Photo_2025-09-02-08-29-19.jpeg';
import image4 from '../images/KakaoTalk_Photo_2025-09-02-08-29-41.jpeg';
import image5 from '../images/KakaoTalk_Photo_2025-09-02-08-29-58.jpeg';
import image6 from '../images/KakaoTalk_Photo_2025-09-02-08-30-19.jpeg';
import image7 from '../images/KakaoTalk_Photo_2025-09-02-08-31-01.jpeg';
import image8 from '../images/KakaoTalk_Photo_2025-09-02-08-31-21.jpeg';
import image9 from '../images/KakaoTalk_Photo_2025-09-02-08-31-59.jpeg';

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
    </Box>
);
}

export default Home;