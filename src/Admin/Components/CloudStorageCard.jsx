import React from 'react';
import { Paper, Typography, LinearProgress } from '@mui/material';

export default function CloudStorageCard({ service, usage, totalUsage }) {
  return (
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 100 }}>
      <Typography variant="h6">{service}</Typography>
      <LinearProgress variant="determinate" value={(usage / totalUsage) * 100} sx={{ mt: 2 }} />
      <Typography variant="body2" sx={{ mt: 1 }}>
        {usage} GB of {totalUsage} GB used
      </Typography>
    </Paper>
  );
}
