import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function PageTitle(props: { title?: string, page?: string }) {
  let { title, page } = props;

  if (!title) title = "Hot Club Of Nowhere";

  return (
    <Box
      sx={{
        mt: 1,
        p: 1,
      }}
    >
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        {title} {page ? " | " + page : ""}
      </Typography>
    </Box>
  );
}
