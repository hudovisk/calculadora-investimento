import { createAction } from "@utils/action-helpers";

import { INIT, CDI_REQUEST_SUCCESS, CDI_REQUEST_ERROR } from "../constants";

export const init = createAction(INIT)();
export const cdiRequestSuccess = createAction(CDI_REQUEST_SUCCESS)<number[]>();
export const cdiRequestError = createAction(CDI_REQUEST_ERROR)<any>();
