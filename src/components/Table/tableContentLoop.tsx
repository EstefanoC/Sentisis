import React from "react";

// Mui
import { Chip, TableCell, Typography } from "@mui/material";

// Components
import InputNumber from "../Common/InputNumber.tsx";

// Types
import type { IData } from "../../types/index";

interface Props {
  Data: IData;
  onClick: (row: any) => void;
}

const TableContentLoop = ({ Data, onClick }: Props) => {
  // Format releaseDate to readable date string
  const formattedDate = new Date(Data.releaseDate).toLocaleDateString();

  return (
    <>
      <TableCell sx={{ cursor: "pointer" }} onClick={() => onClick(Data)}>
        <Typography variant="body2">{Data.title}</Typography>
      </TableCell>
      <TableCell sx={{ cursor: "pointer" }} onClick={() => onClick(Data)}>
        <Chip
          color={
            Data.type === "musical"
              ? "primary"
              : Data.type === "show"
              ? "info"
              : "secondary"
          }
          label={Data.type}
        />
      </TableCell>
      <TableCell sx={{ cursor: "pointer" }} onClick={() => onClick(Data)}>
        <Typography variant="body2">{formattedDate}</Typography>
      </TableCell>
      <TableCell sx={{ width: "90px" }}>
        <InputNumber id={Data.id} defaultValue={0} />
      </TableCell>
      <TableCell sx={{ cursor: "pointer" }} onClick={() => onClick(Data)}>
        <Typography variant="body2">{Data.price} €</Typography>
      </TableCell>
    </>
  );
};

export default TableContentLoop;
