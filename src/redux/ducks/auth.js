export const LOGIN = "snackbar/LOGIN";
export const LOGOUT = "snackbar/LOGOUT";

const initialState = {
  user: "",
  token: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      const { user, token } = action;

      return {
        ...state,
        user,
        token,
      };
    case LOGOUT:
      return {
        user: "",
        token: "",
      };
    default:
      return state;
  }
}

export const setAuth = (type, user, token) => ({
  type: type,
  user,
  token,
});
