'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useColorScheme } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

export default function ModeSwitch() {
  const theme = useTheme();

  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }

  return (
    <Box
      sx={{
        display: 'inline-flex',
        justifyContent: 'flex-end',
        mt: 1,
        p: 1,
      }}
    >
      <FormControl>
        <InputLabel id="mode-select-label" sx={{ color: theme.palette.primary.contrastText }}>Theme</InputLabel>
        <Select
          labelId="mode-select-label"
          id="mode-select"
          value={mode}
          onChange={(event) => setMode(event.target.value as typeof mode)}
          label="Theme"
          sx={{
            color: theme.palette.primary.contrastText,
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.contrastText,
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.contrastText,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.contrastText,
            },
          }}
        >
          <MenuItem value="system">System</MenuItem>
          <MenuItem value="light">Light</MenuItem>
          <MenuItem value="dark">Dark</MenuItem>
        </Select>
      </FormControl>
    </Box >
  );
}
