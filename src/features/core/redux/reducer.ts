import { CDI_REQUEST_SUCCESS } from "@features/core/constants";

export interface AppState {
  readonly cdi: number[];
}

const initialState: AppState = {
  cdi: []
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CDI_REQUEST_SUCCESS:
      return {
        ...state,
        cdi: action.payload
      };
    default:
      return state;
  }
  return state;
}
