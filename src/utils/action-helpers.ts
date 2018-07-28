export const createAction = <T extends string>(type: T) => <P>() => (
  payload?: P
) => ({
  type,
  payload
});
