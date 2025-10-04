import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Copyright from '@/components/Copyright';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            mb: 2,
            display: { xs: 'none', sm: 'block' },
          }}
        >
          {process.env.NEXT_PUBLIC_WEBSITE_NAME}
        </Typography>
        <Copyright />
      </Box>
    </Container>
  );
}
