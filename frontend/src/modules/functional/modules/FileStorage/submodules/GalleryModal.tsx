import React from "react";
import Dialog from "@mui/material/Dialog";
import { Chip, Stack, Typography } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";

const captionStyle = {};

function ImagePlaceholder() {
  return (
    <div
      style={{
        backgroundColor: "red",
        width: "100%",
        aspectRatio: "4/3",
      }}
    />
  );
}

export default function GalleryModal() {
  return (
    <Dialog open={true} fullWidth maxWidth={"md"} PaperProps={{ sx: { p: 0 } }}>
      <ImagePlaceholder />
      <Stack
        direction={"row"}
        alignItems={"flex-end"}
        justifyContent={"space-between"}
        sx={{ p: 2 }}
      >
        <Stack>
          <Typography sx={captionStyle}>image_name.jpg</Typography>
          <Stack spacing={1} direction={"row"}>
            <Chip
              label={"tag 1"}
              deleteIcon={<ClearIcon fontSize={"small"} />}
              onDelete={() => console.log("delete")}
            />
            <Chip
              label={"tag 2"}
              deleteIcon={<ClearIcon fontSize={"small"} />}
              onDelete={() => console.log("delete")}
            />
            <Chip
              label={"tag 3"}
              deleteIcon={<ClearIcon fontSize={"small"} />}
              onDelete={() => console.log("delete")}
            />
          </Stack>
        </Stack>
        <ButtonGroup variant={"outlined"}>
          <IconButton>
            <CheckBoxOutlineBlankIcon />
          </IconButton>
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <ClearIcon />
          </IconButton>
        </ButtonGroup>
      </Stack>
    </Dialog>
  );
}
