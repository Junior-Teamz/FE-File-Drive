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

  // Handle file click
  const handleFileClick = (file) => {
    setSelectedFile(file);
    setAnchorEl(null); // Close menu if open
  };

  // Close the dialog
  const handleCloseDialog = () => {
    setSelectedFile(null);
  };

  // Handle menu click
  const handleMenuClick = (event, file) => {
    event.stopPropagation(); // Prevent event from bubbling up to file click
    setAnchorEl(event.currentTarget);
    setSelectedFile(file); // Set the file for which the menu is opened
  };

  // Close the menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle star click
  const handleStarClick = (event, index) => {
    event.stopPropagation(); // Prevent event from bubbling up to file click
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
              alignItems="center"
              p={2}
              boxShadow={3}
              borderRadius={2}
              onClick={() => handleFileClick(file)}
              sx={{ cursor: "pointer" }} // Add cursor pointer for better UX
            >
              <Folder style={{ fontSize: "48px", color: "#FFC107" }} />
              <Typography variant="h6" align="center" noWrap>
                {file.name}
              </Typography>
              <Box
                display="flex"
                justifyContent="space-between"
                width="100%"
                mt={1}
              >
                <AvatarGroup max={4}>
                  {Array(4)
                    .fill()
                    .map((_, idx) => (
                      <Avatar
                        key={idx}
                        src={`https://randomuser.me/api/portraits/thumb/men/${idx + 1}.jpg`}
                      />
                    ))}
                </AvatarGroup>
                <IconButton onClick={(event) => handleStarClick(event, index)}>
                  {clickedStar[index] ? <Star /> : <StarBorder />}
                </IconButton>
                <IconButton
                  onClick={(event) => handleMenuClick(event, file)}
                >
                  <MoreVert />
                </IconButton>
              </Box>
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
