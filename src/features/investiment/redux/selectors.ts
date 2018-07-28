import { StoreState } from "@src/store";
import { REDUCER_NAME } from "./../constants";

export const getAmount = (state: StoreState) => state[REDUCER_NAME].amount;

export const getStartDate = (state: StoreState) =>
  state[REDUCER_NAME].startDate;
export const getEndDate = (state: StoreState) => state[REDUCER_NAME].endDate;
