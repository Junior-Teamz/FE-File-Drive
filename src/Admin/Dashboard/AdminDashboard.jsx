import React from 'react';
import { Container, Grid, Paper, Typography, Box } from '@mui/material';
import { BarChart } from '@mui/x-charts/BarChart';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import LineChart from '../Components/Chart'; // Komponen custom untuk Line Chart

export default function AdminDashboard() {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Navbar />
        <Container maxWidth="lg">
          {/* Header Welcome Section */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
                <Typography variant="h6" gutterBottom>
                  Welcome back 👋 Jaydon Frankie
                </Typography>
                <Typography variant="body2">
                  If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={4}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
                <Typography variant="h6">
                  The Ultimate Guide to Productivity Hacks
                </Typography>
                <Typography variant="body2">
                  She eagerly opened the gift, her eyes sparkling with excitement.
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Stats Section */}
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
                <Typography variant="h6">Total Active Users</Typography>
                <Typography variant="h4" sx={{ mt: 1 }}>
                  18,765
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
                <Typography variant="h6">Total Installed</Typography>
                <Typography variant="h4" sx={{ mt: 1 }}>
                  4,876
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={3}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 140 }}>
                <Typography variant="h6">Total Downloads</Typography>
                <Typography variant="h4" sx={{ mt: 1 }}>
                  678
                </Typography>
              </Paper>
            </Grid>
          </Grid>

          {/* Charts Section */}
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, height: 290 }}>
                <BarChart
                  series={[
                    { data: [35, 44, 24, 34] },
                    { data: [51, 6, 49, 30] },
                    { data: [15, 25, 30, 50] },
                    { data: [60, 50, 15, 25] },
                  ]}
                  height={200}
                  xAxis={[{ data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }]}
                  margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 2, height: 290 }}>
                <LineChart />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
