import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Training } from "./pages/training";
import { Donate } from "./pages/donate";
import { NotFound } from "./pages/notFound";
import { ContactUs } from "./pages/contactus";
import theme from './components/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Router>
      <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #e0e0e0' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
            Jesus Training
          </Typography>
          <Box>
            <Button color="inherit" component={Link} to="/about">About</Button>
            <Button color="inherit" component={Link} to="/training">Training</Button>
            <Button color="inherit" component={Link} to="/donate">Donate</Button>
            <Button color="inherit" component={Link} to="/contactus">Contact Us</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/training" element={<Training />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
    </ThemeProvider>
  );
}

export default App;
