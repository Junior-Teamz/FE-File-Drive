import React from 'react';
import { Paper, Typography, Box, CircularProgress, Grid } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#34A853', '#FF3D00', '#FFC107', '#757575'];

const storageData = [
  { name: 'Images', value: 12, color: '#34A853', files: 223 },
  { name: 'Media', value: 4.8, color: '#FF3D00', files: 223 },
  { name: 'Documents', value: 4.8, color: '#FFC107', files: 223 },
  { name: 'Other', value: 2.4, color: '#757575', files: 223 },
];

export default function StorageUsageChart() {
  return (
    <Paper sx={{ p: 3, height: 'auto', borderRadius: 4 }}>
      <Typography variant="h6" textAlign="center">Storage Usage</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <CircularProgress variant="determinate" value={76} size={120} thickness={4} />
      </Box>
      <Typography variant="h5" textAlign="center" sx={{ mt: 1 }}>
        76%
      </Typography>
      <Typography variant="subtitle2" textAlign="center">
        Used of 24 GB / 50 GB
      </Typography>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        {storageData.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: item.color,
                  borderRadius: 2,
                  mr: 2,
                }}
              />
              <Box>
                <Typography variant="body2">{item.name}</Typography>
                <Typography variant="body2">{item.value} GB</Typography>
                <Typography variant="caption" color="text.secondary">{item.files} files</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}
