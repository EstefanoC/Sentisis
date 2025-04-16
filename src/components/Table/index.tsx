import React, { useState } from "react";

// MUI
import {
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TableSortLabel,
  Button,
  Box,
  Stack,
} from "@mui/material";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../../store/unitsSlice.ts";

// Utils
import { Data } from "../../utils/data.ts";

// Component
import Modal from "../Modal/index.tsx";
import TableContentLoop from "./tableContentLoop.tsx";

// Types
import type { IData } from "../../types/index.ts";
import type { RootState } from "../../store";
import CartModal from "../Modal/cartModal.tsx";

const TableComponent = () => {
  const columns = ["Name", "Type", "Release date", "Unit", "Price"];

  // State to track sorting column and direction
  const [orderDirection, setOrderDirection] = useState<
    "desc" | "asc" | undefined
  >("desc");
  const [orderBy, setOrderBy] = useState("Release date");

  // State for modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<null | IData>(null);

  // State for cart modal
  const [cartOpen, setCartOpen] = useState(false);

  const dispatch = useDispatch();

  // Get units from redux state
  const units = useSelector((state: RootState) => state.units);

  // Click handler for column header
  const handleSortRequest = (column) => {
    if (column === "Release date") {
      const isAsc = orderBy === column && orderDirection === "asc";
      setOrderDirection(isAsc ? "desc" : "asc");
      setOrderBy(column);
    }
  };

  // Sort data only if orderBy is "Release date"
  const sortedData =
    orderBy === "Release date"
      ? [...Data].sort((a, b) =>
          orderDirection === "asc"
            ? a.releaseDate - b.releaseDate
            : b.releaseDate - a.releaseDate
        )
      : [...Data];

  // Open modal on row click
  const handleRowClick = (row) => {
    setSelectedRow(row);
    setModalOpen(true);
  };

  // Handle Add button click in modal
  const handleAddClick = () => {
    if (selectedRow) {
      dispatch(increment(selectedRow.id));
    }
    setModalOpen(false);
  };

  // Prepare cart items: filter units > 0, map to data, sort descending by units
  const cartItems = Object.entries(units.unitsById)
    .filter(([, count]) => count > 0)
    .map(([id, count]) => {
      const itemData = Data.find((d) => d.id === id);
      return { itemData, count };
    })
    .filter(({ itemData }) => itemData !== undefined)
    .map(({ itemData, count }) => ({
      ...itemData!,
      units: count,
      totalPrice: itemData!.price * count,
    }))
    .sort((a, b) => b.units - a.units);

  // Calculate total price sum
  const totalPriceSum = cartItems.reduce(
    (sum, item) => sum + item.totalPrice,
    0
  );

  // Check if cart has any items
  const hasCartItems = cartItems.length > 0;

  return (
    <>
      {/* Container */}
      <Stack
        direction="column"
        gap={3}
        width="100%"
        sx={{ borderRadius: 2, overflow: "hidden" }}
      >
        {/* Table */}
        <TableContainer
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
                  <TableCell
                    key={column}
                    onClick={() => handleSortRequest(column)}
                    sx={{
                      cursor: column === "Release date" ? "pointer" : "default",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "bold",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {column === "Release date" ? (
                        <TableSortLabel
                          active={orderBy === column}
                          direction={
                            orderBy === column ? orderDirection : "asc"
                          }
                        >
                          {column}
                        </TableSortLabel>
                      ) : (
                        column
                      )}
                    </Typography>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            {/* Data of Table */}
            <TableBody
              sx={{
                color: "#fff",
                backgroundColor: (theme) => theme.palette.background.paper,
                "& > tr:nth-of-type(even)": {
                  backgroundColor: (theme) => theme.palette.grey.A100,
                },
              }}
            >
              {sortedData.map((row) => (
                <TableRow key={row.id}>
                  <TableContentLoop Data={row} onClick={handleRowClick} />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Cart Button */}
        {hasCartItems && (
          <Box
            sx={{
              marginTop: 1,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              sx={{ width: "100%" }}
              variant="contained"
              color="primary"
              onClick={() => setCartOpen(true)}
            >
              <Typography variant="body1" fontWeight="600">
                Cart
              </Typography>
            </Button>
          </Box>
        )}
      </Stack>

      {/* Detail Modal */}
      {selectedRow && (
        <Modal
          open={modalOpen}
          data={selectedRow}
          handleClose={setModalOpen}
          handleAddClick={handleAddClick}
        />
      )}

      {/* Cart Modal */}
      {cartItems && (
        <CartModal
          open={cartOpen}
          data={cartItems}
          total={totalPriceSum}
          handleClose={setCartOpen}
          handleAddClick={handleAddClick}
        />
      )}
    </>
  );
};

export default TableComponent;
