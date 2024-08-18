import React, { useState } from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import { UploadFile, ViewList, ViewModule } from '@mui/icons-material';
import FileListView from '../Components/FileListView';
import FileGridView from '../Components/FileGridView';
import UploadDialog from '../Components/UploadDialog';

const files = [
  { name: 'Docs', size: '2.4 GB', modified: '18 Aug 2024 5:38 PM', shared: 4 },
  { name: 'Foods', size: '400 MB', modified: '13 Aug 2024 12:38 PM', shared: 3 },
  { name: 'Projects', size: '1.2 GB', modified: '17 Aug 2024 4:38 PM', shared: 4 },
  // more files...
];

export default function UserDashboard() {
  const [isGridView, setIsGridView] = useState(true);
  const [isUploadDialogOpen, setIsUploadDialogOpen] = useState(false);

  const handleUploadClick = () => {
    setIsUploadDialogOpen(true);
  };

  const handleCloseUploadDialog = () => {
    setIsUploadDialogOpen(false);
  };

  return (
    <Box p={4} bgcolor="#f9f9f9">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4" sx={{ fontSize: { xs: '24px', sm: '32px', md: '40px' } }}>File Manager</Typography>
        <Button variant="contained" startIcon={<UploadFile />} onClick={handleUploadClick}>
          Upload
        </Button>
      </Box>

      <Box mb={3} display="flex" justifyContent="space-between" alignItems="center">
        <IconButton onClick={() => setIsGridView(!isGridView)}>
          {isGridView ? <ViewList /> : <ViewModule />}
        </IconButton>
      </Box>

      {isGridView ? (
        <FileGridView files={files} />
      ) : (
        <FileListView files={files} />
      )}

      <UploadDialog open={isUploadDialogOpen} onClose={handleCloseUploadDialog} />
    </Box>
  );
}
