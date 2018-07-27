import { createAction } from "redux-actions";

import { INIT } from "./constants";

export const init = createAction(INIT);

export default function reducer(state = {}, action) {
  return state;
}
