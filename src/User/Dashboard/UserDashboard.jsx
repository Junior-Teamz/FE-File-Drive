import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { ViewList, ViewModule } from "@mui/icons-material";
import FileListView from "../Components/FileListView";
import FileGridView from "../Components/FileGridView";
import UploadDialog from "../Components/UploadDialog";
import { CloudUpload } from "lucide-react";
import Layout from "../Components/Layout";

const files = [
  {
    name: "Docs",
    size: "2.4 GB",
    type: "Folder",
    modified: "18 Aug 2024 5:38 PM",
    shared: 4,
  },
  {
    name: "Foods",
    size: "400 MB",
    type: "Folder",
    modified: "13 Aug 2024 12:38 PM",
    shared: 3,
  },
  {
    name: "Projects",
    size: "1.2 GB",
    type: "Folder",
    modified: "17 Aug 2024 4:38 PM",
    shared: 4,
  },
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
    <>
    <Layout>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography
          variant="h4"
          sx={{ fontSize: { xs: "24px", sm: "32px", md: "40px" } }}
        >
          Sharing File
        </Typography>
        <Button
          variant="contained"
          startIcon={<CloudUpload />}
          onClick={handleUploadClick}
          className=" bg-gradient-to-r from-green-700 to-green-500"
        >
          Upload
        </Button>
      </Box>

      <Box
        mb={3}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <button
          className="border py-1 px-1 flex items-center"
          onClick={() => setIsGridView(!isGridView)}
        >
          <ViewModule
            className={`text-gray-600 rounded-md ${
              isGridView ? "bg-gray-200" : "hover:bg-gray-200"
            }`}
          />
          <ViewList
            className={`text-gray-600 rounded-md ${
              !isGridView ? "bg-gray-200" : "hover:bg-gray-200"
            }`}
            style={{ marginLeft: 8 }}
          />
        </button>
      </Box>

      {isGridView ? (
        <FileGridView files={files} />
      ) : (
        <FileListView files={files} />
      )}

      <UploadDialog
        open={isUploadDialogOpen}
        onClose={handleCloseUploadDialog}
      />
    </Layout>
    </>
  );
}
