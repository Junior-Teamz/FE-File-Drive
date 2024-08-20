import React, { useRef } from "react";
import { Box, Button, Dialog, DialogContent, Typography } from "@mui/material";
import { UploadFile } from "@mui/icons-material";
import SearchFile from "../../assets/Images/file.png";
import { UploadCloud } from "lucide-react";

export default function UploadDialog({ open, onClose }) {
  const fileInputRef = useRef(null);

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <span
        style={{ color: "#3f51b5", cursor: "pointer" }}
        onClick={handleBrowseClick}
      >
        <DialogContent>
          <Box textAlign="center" p={3}>
            <Typography variant="h6" mb={2}>
             Upload Files
            </Typography>
            <Box
              border="2px dashed #ccc"
              borderRadius="8px"
              p={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              bgcolor="#f9f9f9"
              mb={3}
            >
              <img
                src={SearchFile}
                alt="Upload Illustration"
                style={{ width: "150px", marginBottom: "16px" }}
              />
              <Typography variant="body1">Drop or Select file</Typography>
              <Typography variant="body2" color="textSecondary">
                Drop files here or click browse through your machine
              </Typography>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
              />
            </Box>
            <Button variant="contained" startIcon={<UploadCloud />}>
              Upload
            </Button>
          </Box>
        </DialogContent>
      </span>
    </Dialog>
  );
}
