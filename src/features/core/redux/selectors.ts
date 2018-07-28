import { createSelector } from "reselect";
import { StoreState } from "@src/store";
import { REDUCER_NAME } from "./../constants";

export const getRawCDI = (state: StoreState) => state[REDUCER_NAME].cdi;

export const getAnualCDI = createSelector(
  getRawCDI,
  cdiData =>
    cdiData.reduce((acc, currentValue) => acc * (currentValue / 100 + 1), 1) - 1
);
