import { createAction } from "@utils/action-helpers";
import {
  UPDATE_AMOUNT,
  UPDATE_STARTDATE,
  UPDATE_ENDDATE
} from "./../constants";

export const updateAmount = createAction(UPDATE_AMOUNT)<number>();
export const updateStartDate = createAction(UPDATE_STARTDATE)<any>();
export const updateEndDate = createAction(UPDATE_ENDDATE)<any>();
