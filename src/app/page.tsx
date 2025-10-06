import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Home() {
  return (
    <>
      <img src='/images/home.webp' alt='Hot Club Of Nowhere at Steelwheel Brewery' width='100%' />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box>
        </Box>
      </Container>
    </>
  );
}
