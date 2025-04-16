import React from "react";

import { NumberField } from "@base-ui-components/react";

import styles from "./inputNumber.module.css";

// Icon
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store";
import { setUnits, increment, decrement } from "../../store/unitsSlice.ts";

interface Props {
  id: string;
  defaultValue?: number;
}

const InputNumber = ({ id, defaultValue = 0 }: Props) => {
  const units = useSelector(
    (state: RootState) => state.units.unitsById[id] ?? defaultValue
  );
  const dispatch = useDispatch();

  const handleUnitsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      dispatch(setUnits({ id, value }));
    }
  };

  const handleIncrement = () => {
    dispatch(increment(id));
  };

  const handleDecrement = () => {
    dispatch(decrement(id));
  };

  return (
    <NumberField.Root id={id} value={units} className={styles.Field}>
      <NumberField.Group className={styles.Group}>
        {/* Remove button on the left */}
        <NumberField.Decrement
          className={styles.Decrement}
          onClick={handleDecrement}
        >
          <RemoveIcon />
        </NumberField.Decrement>

        <NumberField.Input
          className={styles.Input}
          min={0}
          type="text"
          value={units}
          onChange={handleUnitsChange}
        />

        {/* Add button on the right */}
        <NumberField.Increment
          className={styles.Increment}
          onClick={handleIncrement}
        >
          <AddIcon />
        </NumberField.Increment>
      </NumberField.Group>
    </NumberField.Root>
  );
};

export default InputNumber;
