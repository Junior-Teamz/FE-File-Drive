import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import DataActivityChart from '../Components/DataActivityChart';
import StorageUsageChart from '../Components/StorageUsageChart';
import CloudStorageCard from '../Components/CloudStorageCard';
import FolderCard from '../Components/FolderCard';
import RecentFilesList from '../Components/RecentFilesList';

export default function AdminDashboard() {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}>
        <Navbar />
        <Container maxWidth="lg">
          {/* Cloud Storage Sections */}
          <Grid container spacing={3}>
            {['Dropbox', 'Drive', 'OneDrive'].map((service, index) => (
              <Grid item xs={12} md={4} key={service}>
                <CloudStorageCard service={service} usage={(index + 1) * 2.4} totalUsage={24} />
              </Grid>
            ))}
          </Grid>

          {/* Charts */}
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12} md={8}>
              <DataActivityChart />
            </Grid>
            <Grid item xs={12} md={4}>
              <StorageUsageChart />
            </Grid>
          </Grid>

          {/* Folders */}
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {['Docs', 'Projects', 'Work', 'Training'].map((folder) => (
              <Grid item xs={12} md={3} key={folder}>
                <FolderCard folder={folder} usage={1.4} />
              </Grid>
            ))}
          </Grid>

          {/* Recent Files */}
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <RecentFilesList />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
