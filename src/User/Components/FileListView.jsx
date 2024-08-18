import React, { useState } from 'react';
import { Box, Grid, Button, Typography, Checkbox, AvatarGroup, Avatar, IconButton, Dialog, DialogContent } from '@mui/material';
import { Folder, Star, StarBorder, MoreVert } from '@mui/icons-material';

export default function FileListView({ files }) {
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
          <Grid item xs={12} key={index}>
            <Box
              display="flex"
              alignItems="center"
              p={2}
              bgcolor="white"
              borderRadius="8px"
              onClick={() => handleFileClick(file)}
              sx={{
                cursor: 'pointer',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                textAlign: { xs: 'center', sm: 'left' },
              }}
            >
              <Box display="flex" alignItems="center" mb={{ xs: 1, sm: 0 }}>
                <Checkbox />
                <Folder sx={{ mr: 2, color:'#FFC107'  }} />
                <Typography variant="body1" sx={{ flexGrow: 1 }}>{file.name}</Typography>
              </Box>
              <Box display="flex" alignItems="center" flexWrap="wrap" justifyContent="center">
                <Typography variant="body2" sx={{ mr: { xs: 0, sm: 3 }, mb: { xs: 1, sm: 0 } }}>{file.size}</Typography>
                <Typography variant="body2" sx={{ mr: { xs: 0, sm: 3 }, mb: { xs: 1, sm: 0 } }}>folder</Typography>
                <Typography variant="body2" sx={{ mr: { xs: 0, sm: 3 }, mb: { xs: 1, sm: 0 } }}>{file.modified}</Typography>
                <AvatarGroup max={4} sx={{ mr: { xs: 0, sm: 3 }, mb: { xs: 1, sm: 0 } }}>
                  {Array.from({ length: file.shared }, (_, idx) => (
                    <Avatar key={idx} alt={`User ${idx + 1}`} src={`https://randomuser.me/api/portraits/thumb/men/${idx + 1}.jpg`} />
                  ))}
                </AvatarGroup>
                <Box display="flex" justifyContent="center">
                  <IconButton>
                    {index % 2 === 0 ? <Star /> : <StarBorder />}
                  </IconButton>
                  <IconButton>
                    <MoreVert />
                  </IconButton>
                </Box>
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
                <Folder sx={{ fontSize: '48px', color: '#FFC107' }} />
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
