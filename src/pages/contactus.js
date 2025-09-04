import { Box, Typography, Paper, Link, Container } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

export function ContactUs() {
    return (
        <Container maxWidth="sm" sx={{ py: 6 }}>
            <Paper
            elevation={2}
            sx={{
                p: 4,
                borderRadius: 3,
                backgroundColor: '#f8f5f0',
                border: '1px solid #ddd',
            }}
            >
            <Typography
                variant="h4"
                fontWeight="bold"
                gutterBottom
                sx={{ color: '#3e3e3e' }}
            >
                Contact Us
            </Typography>

            <Typography variant="body1" sx={{ mb: 3, color: '#555' }}>
                We'd love to hear from you. Whether you have a question about the program, want to sign up, or
                just want to get in touch, feel free to reach out using the contact details below.
            </Typography>

            <Box display="flex" alignItems="center" mb={2}>
                <PhoneIcon sx={{ mr: 1, color: '#7b6e65' }} />
                <Typography variant="body1" sx={{ color: '#555' }}>
                +1 (123) 456-7890
                </Typography>
            </Box>

            <Box display="flex" alignItems="center">
                <EmailIcon sx={{ mr: 1, color: '#7b6e65' }} />
                <Link
                href="mailto:info@jesustraining.org"
                underline="hover"
                variant="body1"
                sx={{ color: '#555' }}
                >
                info@jesustraining.org
                </Link>
            </Box>
            </Paper>
        </Container>
    );
}

export default ContactUs;