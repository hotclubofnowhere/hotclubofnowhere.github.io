import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <>
      <img src='/images/home.webp' alt='Hot Club Of Nowhere at Steelwheel Brewery' width='100%' />
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 4,
          width: '100vw',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          About Us
        </Typography>
        <p>
          The Hot Club of Nowhere is a lively and energetic five-piece ensemble dedicated to the timeless sounds of pre-bop swing and hot jazz. Heavily influenced by the legendary Django Reinhardt!
        </p>
      </Box>
    </>
  );
}
