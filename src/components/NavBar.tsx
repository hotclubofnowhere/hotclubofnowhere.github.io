'use client';
import * as React from 'react';
import Container from '@mui/material/Container';

export default function NavBar(props: { children: React.ReactNode }) {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {props.children}
    </Container>
  );
}
