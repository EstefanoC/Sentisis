import React from "react";

// Mui
// MUI
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Stack,
} from "@mui/material";

// Types
import type { IData } from "../../types";

interface Props {
  data: IData;
  open: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddClick: (row: any) => void;
}
const Modal = ({ data, open, handleClose, handleAddClick }: Props) => {
  return (
    <Dialog
      open={open}
      onClose={() => handleClose(false)}
      slotProps={{
        paper: {
          style: {
            backgroundColor: "#e7e7e7",
          },
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          borderBottom: " 1px solid rgba(2, 5, 19, 0.08)",
        }}
      >
        Details
      </DialogTitle>
      <DialogContent sx={{ paddingY: 3, marginTop: 3 }}>
        {data && (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Stack>
              <Typography variant="h6" color="primary.dark">
                Name:
              </Typography>
              <Typography variant="body1">{data.title}</Typography>
            </Stack>
            <Stack>
              <Typography variant="h6" color="primary.dark">
                Type:
              </Typography>
              <Typography variant="body1">{data.type}</Typography>
            </Stack>
            <Stack>
              <Typography variant="h6" color="primary.dark">
                Description:
              </Typography>
              <Typography variant="body1">{data.description}</Typography>
            </Stack>
          </Box>
        )}
      </DialogContent>
      <DialogActions
        sx={{ display: "flex", justifyContent: "center", paddingY: 3 }}
      >
        <Button onClick={handleAddClick} color="primary" variant="contained">
          Add
        </Button>
        <Button onClick={() => handleClose(false)} color="error">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
