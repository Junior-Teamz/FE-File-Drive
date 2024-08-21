import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Avatar } from '@mui/material';

export default function RecentFilesList() {
  const files = ['cover-2.jpg', 'design-suratmas-2015.mp3', 'marketing-guide.pdf'];

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6">Recent Files</Typography>
      <List>
        {files.map((file, index) => (
          <ListItem key={index}>
            <Avatar>{file.charAt(0).toUpperCase()}</Avatar>
            <ListItemText primary={file} secondary="26 Aug, 2024, 10:24 AM" />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
