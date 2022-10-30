import { API_BASE_URL } from "../constants";

import { request } from "./../util/APIUtil";
import { useUser } from "./../components/user/hooks/useUser";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSnackbar } from "./../redux/ducks/snackbar";

export function useAuth() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { clearUser, updateUser } = useUser();

  async function login(signupRequest) {
    try {
      const data = await request({
        url: API_BASE_URL + "/auth/login",
        method: "POST",
        body: JSON.stringify(signupRequest),
      });
      if ("username" in data && "token" in data) {
        dispatch(setSnackbar(true, "success", "Login Success"));
      }

      updateUser(data);
    } catch (error) {
      dispatch(setSnackbar(true, "error", JSON.parse(error.message).message));
    }
  }

  async function register(signupRequest, handleError) {
    try {
      const data = await request({
        url: API_BASE_URL + "/auth/signup",
        method: "POST",
        body: JSON.stringify(signupRequest),
      });

      navigate("/login");
      dispatch(setSnackbar(true, "success", "You're successfully registered."));
    } catch (error) {
      handleError(error);

      dispatch(setSnackbar(true, "error", JSON.parse(error.message).message));
    }
  }

  async function signin(username, password) {
    const loginRequest = {
      usernameOrEmail: username,
      password: password,
    };
    login(loginRequest);
  }

  async function signup(signupRequest, handleError) {
    register(signupRequest, handleError);
  }

  function signout() {
    clearUser();
    navigate("/");
  }
  return { signin, signup, signout };
}
