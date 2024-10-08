import React, { useState } from "react";
import {
  IconButton,
  AvatarGroup,
  Avatar,
  Menu,
  MenuItem,
  Dialog,
  DialogContent,
  Typography,
  Button,
  Table,
  Checkbox,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  useMediaQuery,
  Box,
  Stack,
  TableFooter,
  TablePagination,
} from "@mui/material";
import {
  Star,
  StarBorder,
  Folder,
  MoreVert,
  Link as LinkIcon,
  Delete as DeleteIcon,
  Share as ShareIcon,
  Edit as EditIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

export default function FileListView({ files }) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [clickedStar, setClickedStar] = useState({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));

  const handleFileClick = (file) => {
    setSelectedFile(file);
  };

  const handleCloseDialog = () => {
    setSelectedFile(null);
  };

  const handleMenuClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleStarClick = (event, index) => {
    event.stopPropagation();
    setClickedStar((prevStars) => ({
      ...prevStars,
      [index]: !prevStars[index],
    }));
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelectedFiles = files.map((file) => file.name);
      setSelectedFiles(newSelectedFiles);
    } else {
      setSelectedFiles([]);
    }
  };

  const handleCheckboxClick = (event, fileName) => {
    event.stopPropagation();
    const selectedIndex = selectedFiles.indexOf(fileName);
    let newSelectedFiles = [];

    if (selectedIndex === -1) {
      newSelectedFiles = newSelectedFiles.concat(selectedFiles, fileName);
    } else if (selectedIndex === 0) {
      newSelectedFiles = newSelectedFiles.concat(selectedFiles.slice(1));
    } else if (selectedIndex === selectedFiles.length - 1) {
      newSelectedFiles = newSelectedFiles.concat(selectedFiles.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedFiles = newSelectedFiles.concat(
        selectedFiles.slice(0, selectedIndex),
        selectedFiles.slice(selectedIndex + 1)
      );
    }

    setSelectedFiles(newSelectedFiles);
  };

  const isSelected = (fileName) => selectedFiles.indexOf(fileName) !== -1;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Box p={isMobile ? 2 : 4}>
        <Box
          sx={{
            maxWidth: isMobile ? "70vh" : isTablet ? "95vh" : "200vh",
            maxHeight: isMobile ? "75vh" : "60vh",
            overflowX: "auto",
            overflowY: "auto",
          }}
        >
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      indeterminate={
                        selectedFiles.length > 0 &&
                        selectedFiles.length < files.length
                      }
                      checked={
                        files.length > 0 &&
                        selectedFiles.length === files.length
                      }
                      onChange={handleSelectAllClick}
                    />
                  </TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Size</TableCell>
                  <TableCell>Type</TableCell>
                  <TableCell>Modified</TableCell>
                  <TableCell>Shared</TableCell>
                  <TableCell>Starred</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {files
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((file, index) => {
                    const isItemSelected = isSelected(file.name);
                    return (
                      <TableRow
                        key={index}
                        onClick={() => handleFileClick(file)}
                        sx={{ cursor: "pointer" }}
                        selected={isItemSelected}
                        hover
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            onChange={(event) =>
                              handleCheckboxClick(event, file.name)
                            }
                          />
                        </TableCell>
                        <TableCell>
                          <Stack direction="row" alignItems="center">
                            <Folder
                              className="mb-1 mr-1"
                              style={{ color: "#FFC107" }}
                            />
                            {file.name}
                          </Stack>
                        </TableCell>
                        <TableCell>{file.size}</TableCell>
                        <TableCell>{file.type}</TableCell>
                        <TableCell>{file.modified}</TableCell>

                        <TableCell>
                          <AvatarGroup max={4}>
                            {Array(4)
                              .fill()
                              .map((_, idx) => (
                                <Avatar
                                  key={idx}
                                  src={`https://randomuser.me/api/portraits/thumb/men/${
                                    idx + 1
                                  }.jpg`}
                                />
                              ))}
                          </AvatarGroup>
                        </TableCell>

                        <TableCell>
                          <IconButton
                            onClick={(event) => handleStarClick(event, index)}
                          >
                            {clickedStar[index] ? <Star /> : <StarBorder />}
                          </IconButton>
                        </TableCell>
                        <TableCell>
                          <IconButton
                            onClick={(event) => handleMenuClick(event, file)}
                          >
                            <MoreVert />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <Table>
          <TableFooter
            sx={{ position: "sticky", bottom: 0, backgroundColor: "white" }}
          >
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                count={files.length}
                className="float-left"
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
          </Table>
        </Box>

        {selectedFile && !anchorEl && (
          <Dialog
            open={Boolean(selectedFile)}
            onClose={handleCloseDialog}
            fullWidth
            maxWidth="sm"
          >
            <DialogContent>
              <Typography variant="h6">File Information</Typography>
              <Folder style={{ fontSize: "48px", color: "#FFC107" }} />
              <Typography variant="h5">{selectedFile.name}</Typography>
              <Typography variant="subtitle1" gutterBottom>
                Tags
              </Typography>
              <Typography variant="body2" paragraph>
                Technology, Marketing, Design
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                Properties
              </Typography>
              <Typography variant="body2">Size: {selectedFile.size}</Typography>
              <Typography variant="body2">
                Modified: {selectedFile.modified}
              </Typography>
              <Button variant="contained" color="error" sx={{ mt: 3 }}>
                Delete
              </Button>
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
          <MenuItem onClick={handleMenuClose}>
            <LinkIcon sx={{ marginRight: 1 }} />
            Copy Link
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <ShareIcon sx={{ marginRight: 1 }} />
            Share
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <EditIcon sx={{ marginRight: 1 }} />
            Edit
          </MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ color: "red" }}>
            <DeleteIcon sx={{ marginRight: 1 }} />
            Delete
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
}
