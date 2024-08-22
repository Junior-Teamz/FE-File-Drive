import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  IconButton,
  AvatarGroup,
  Avatar,
  Dialog,
  DialogContent,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import {
  Star,
  StarBorder,
  Folder,
  MoreVert,
  Share as ShareIcon,
  Edit as EditIcon,
  Link as LinkIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";

export default function FileGridView({ files }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [clickedStar, setClickedStar] = useState({});

  const handleFileClick = (file) => {
    setSelectedFile(file); //Hanya atur file yang dipilih saat mengklik baris file
  };

  const handleCloseDialog = () => {
    setSelectedFile(null); //Tutup dialog file
  };

  const handleMenuClick = (event) => {
    event.stopPropagation(); //Cegah modal terbuka saat menu diklik
    setAnchorEl(event.currentTarget); //Mengatur elemen jangkar untuk menu
  };

  const handleMenuClose = () => {
    setAnchorEl(null); //Tutup menu tanpa memengaruhi file yang dipilih
  };

  // Handle star click
  const handleStarClick = (event, index) => {
    event.stopPropagation(); //Cegah event muncul saat mengklik file
    setClickedStar((prevStars) => ({
      ...prevStars,
      [index]: !prevStars[index],
    }));
  };

  return (
    <>
      <Grid container spacing={3}>
        {files.map((file, index) => (
          <Grid item xs={12} sm={6} md={4} key={file.name}>
            <Box
              display="flex"
              flexDirection="column"
              p={2}
              boxShadow={1}
              borderRadius={2}
              onClick={() => handleFileClick(file)}
              sx={{
                cursor: "pointer",
                bgcolor: "#fff",
                border: "1px solid #e0e0e0",
                position: "relative",
                '&:hover': {
                  boxShadow: 3,
                },
              }}
            >
              <Folder style={{ fontSize: "48px", color: "#FFC107" }} />
              <Typography variant="h6" mt={2} noWrap>
                {file.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" mt={1}>
                {file.size} ・ {file.filesCount} files
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={2}
              >
                <AvatarGroup max={3}>
                  {Array(4)
                    .fill()
                    .map((_, idx) => (
                      <Avatar
                        key={idx}
                        src={`https://randomuser.me/api/portraits/thumb/men/${
                          idx + 1
                        }.jpg`}
                        sx={{ width: 24, height: 24 }}
                      />
                    ))}
                </AvatarGroup>
                <IconButton
                  onClick={(event) => handleStarClick(event, index)}
                  sx={{ padding: "6px" }}
                >
                  {clickedStar[index] ? (
                    <Star sx={{ fontSize: "20px", color: "#FFC107" }} />
                  ) : (
                    <StarBorder sx={{ fontSize: "20px" }} />
                  )}
                </IconButton>
              </Box>
              <IconButton
                onClick={(event) => handleMenuClick(event)}
                sx={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  padding: "6px",
                }}
              >
                <MoreVert sx={{ fontSize: "20px" }} />
              </IconButton>
            </Box>
          </Grid>
        ))}
      </Grid>

      {selectedFile && (
        <Dialog
          open={Boolean(selectedFile)}
          onClose={handleCloseDialog}
          fullWidth
          maxWidth="sm"
        >
          <DialogContent>
            <Box p={3} bgcolor="#f9f9f9">
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={3}
              >
                <Typography variant="h6">Info</Typography>
                <IconButton>
                  <StarBorder />
                </IconButton>
              </Box>
              <Box mb={3}>
                <Folder style={{ fontSize: "48px", color: "#FFC107" }} />
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
                    <Typography variant="body2" color="textSecondary">
                      #Add a tag
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Typography variant="subtitle1">Properties</Typography>
                <Box>
                  <Typography variant="body2">
                    Size: {selectedFile.size}
                  </Typography>
                  <Typography variant="body2">
                    Modified: {selectedFile.modified}
                  </Typography>
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

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem
          onClick={(event) => {
            event.stopPropagation(); // Prevent event from bubbling
            handleMenuClose();
          }}
        >
          <LinkIcon sx={{ marginRight: 1 }} />
          Copy Link
        </MenuItem>
        <MenuItem
          onClick={(event) => {
            event.stopPropagation(); // Prevent event from bubbling
            handleMenuClose();
          }}
        >
          <ShareIcon sx={{ marginRight: 1 }} />
          Share
        </MenuItem>
        <MenuItem
          onClick={(event) => {
            event.stopPropagation(); // Prevent event from bubbling
            handleMenuClose();
          }}
        >
          <EditIcon sx={{ marginRight: 1 }} />
          Edit
        </MenuItem>
        <MenuItem
          onClick={(event) => {
            event.stopPropagation(); // Prevent event from bubbling
            handleMenuClose();
          }}
          sx={{ color: "red" }}
        >
          <DeleteIcon sx={{ marginRight: 1 }} />
          Delete
        </MenuItem>
      </Menu>
    </>
  );
}
