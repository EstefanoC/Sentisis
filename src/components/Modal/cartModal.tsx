import React from "react";

// MUI
import {
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
} from "@mui/material";

// Types
import type { IData } from "../../types";

// Components
import TableCartLoop from "../Table/tableCartLoop.tsx";

interface Props {
  data: IData[];
  open: boolean;
  total: number;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddClick: (row: any) => void;
}

const CartModal = ({ data, total, open, handleClose }: Props) => {
  const columns = ["Name", "Units", "Price"];

  return (
    <Dialog
      open={open}
      onClose={() => handleClose(false)}
      aria-labelledby="cart-dialog-title"
      aria-describedby="cart-dialog-description"
      slotProps={{
        paper: {
          sx: {
            width: "100%",
          },
        },
      }}
    >
      <DialogTitle id="cart-dialog-title" sx={{ textAlign: "center" }}>
        Cart Summary
      </DialogTitle>
      <DialogContent dividers>
        {/* Table */}
        <TableContainer
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px 8px 0px 0px",
            boxSizing: "border-box",
            overflow: "hidden",
            border: "1px solid",
            borderColor: (theme) => theme.palette.secondary.light,
          }}
        >
          <Table>
            {/* Columns */}
            <TableHead
              sx={{
                color: (theme) => theme.palette.common.black,
                backgroundColor: (theme) => theme.palette.primary.main,
              }}
            >
              <TableRow>
                {columns.map((column) => (
                  <TableCell key={column}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {column}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            {/* Data of Table */}
            <TableBody
              sx={{
                color: "#fff",
                "& > tr:nth-of-type(even)": {
                  backgroundColor: (theme) => theme.palette.grey[200],
                },
              }}
            >
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCartLoop Data={row} />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box
          sx={{
            borderTop: "1px solid #ccc",
            paddingTop: 2,
            paddingBottom: 1,
            display: "flex",
            justifyContent: "flex-end",
            fontWeight: "bold",
          }}
        >
          <Typography variant="h5">Total: {total.toFixed(2)} €</Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;
