import * as React from 'react';
import Box from '@mui/material/Box';

export default function NavControls(props: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      {props.children}
    </Box>
  );
} 
