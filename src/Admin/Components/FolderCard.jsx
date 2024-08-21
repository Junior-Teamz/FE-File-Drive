import React from 'react';
import { Paper, Typography } from '@mui/material';

export default function FolderCard({ folder, usage }) {
  return (
    <Paper sx={{ p: 2, height: 100 }}>
      <Typography variant="h6">{folder}</Typography>
      <Typography variant="body2">{usage} GB used</Typography>
    </Paper>
  );
}
