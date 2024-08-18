import React, { useState } from 'react';
import { Box,Button, Grid, Typography, Checkbox, AvatarGroup, Avatar, IconButton, Dialog, DialogContent } from '@mui/material';
import { Folder, Star, StarBorder, MoreVert } from '@mui/icons-material';

export default function FileGridView({ files }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileClick = (file) => {
    setSelectedFile(file);
  };

  const handleCloseDialog = () => {
    setSelectedFile(null);
  };

  return (
    <>
      <Grid container spacing={2}>
        {files.map((file, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              p={2}
              bgcolor="white"
              borderRadius="8px"
              onClick={() => handleFileClick(file)}
              sx={{
                cursor: 'pointer',
                '@media (min-width: 600px)': {
                  flexDirection: 'row',
                },
              }}
            >
              <Box display="flex" alignItems="center" mb={1}>
                <Checkbox />
                <Folder  style={{ marginRight: '16px', color: '#FFC107' }} />
              </Box>
              <Box flexGrow={1}>
                <Typography variant="body1">{file.name}</Typography>
                <Typography variant="body2">{file.size}</Typography>
                <Typography variant="body2">folder</Typography>
                <Typography variant="body2">{file.modified}</Typography>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="flex-end" mt={1}>
                <AvatarGroup max={4}>
                  {Array.from({ length: file.shared }, (_, idx) => (
                    <Avatar key={idx} alt={`User ${idx + 1}`} src={`https://randomuser.me/api/portraits/thumb/men/${idx + 1}.jpg`} />
                  ))}
                </AvatarGroup>
                <IconButton>{index % 2 === 0 ? <Star /> : <StarBorder />}</IconButton>
                <IconButton>
                  <MoreVert />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {selectedFile && (
        <Dialog open={Boolean(selectedFile)} onClose={handleCloseDialog} fullWidth maxWidth="sm">
          <DialogContent>
            <Box p={3} bgcolor="#f9f9f9">
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h6">Info</Typography>
                <IconButton>
                  <StarBorder />
                </IconButton>
              </Box>
              <Box mb={3}>
                <Folder style={{ fontSize: '48px', color: '#FFC107' }} />
                <Typography variant="h5">{selectedFile.name}</Typography>
              </Box>
              <Box mb={3}>
                <Typography variant="subtitle1">Tags</Typography>
                <Box display="flex" flexWrap="wrap">
                  <Box bgcolor="#f0f0f0" borderRadius="16px" p={1} m={0.5}>
                    <Typography variant="body2">Technology</Typography>
                  </Box>
                  <Box bgcolor="#f0f0f0" borderRadius="16px" p={1} m={0.5}>
                    <Typography variant="body2">Marketing</Typography>
                  </Box>
                  <Box bgcolor="#f0f0f0" borderRadius="16px" p={1} m={0.5}>
                    <Typography variant="body2">Design</Typography>
                  </Box>
                  <Box p={1} m={0.5}>
                    <Typography variant="body2" color="textSecondary">#Add a tags</Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Typography variant="subtitle1">Properties</Typography>
                <Box>
                  <Typography variant="body2">Size: {selectedFile.size}</Typography>
                  <Typography variant="body2">Modified: {selectedFile.modified}</Typography>
                  <Typography variant="body2">Type: Folder</Typography>
                </Box>
              </Box>
              <Button variant="contained" color="error" sx={{ mt: 3 }}>
                Delete
              </Button>
            </Box>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
