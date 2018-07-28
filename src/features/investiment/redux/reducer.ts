import {
  UPDATE_AMOUNT,
  UPDATE_STARTDATE,
  UPDATE_ENDDATE
} from "./../constants";

export interface InvestimentState {
  amount: number;
  startDate: any;
  endDate: any;
}

const initialState: InvestimentState = {
  amount: 150000,
  startDate: null,
  endDate: null
};
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_AMOUNT:
      return { ...state, amount: action.payload };
    case UPDATE_STARTDATE:
      return { ...state, startDate: action.payload };
    case UPDATE_ENDDATE:
      return { ...state, endDate: action.payload };
    default:
      return state;
  }
};
