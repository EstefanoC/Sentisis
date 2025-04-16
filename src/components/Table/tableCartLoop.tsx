import React from "react";

// Mui
import { TableCell, Typography } from "@mui/material";

// Types
import type { IData } from "../../types/index";

interface Props {
  Data: IData;
}

const TableCartLoop = ({ Data }: Props) => (
  <>
    <TableCell>
      <Typography variant="body2">{Data.title}</Typography>
    </TableCell>
    <TableCell>
      <Typography variant="body2">{Data.units}</Typography>
    </TableCell>
    <TableCell>
      <Typography variant="body2">{Data.price} €</Typography>
    </TableCell>
  </>
);

export default TableCartLoop;
