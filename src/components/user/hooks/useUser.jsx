import { useQuery, useQueryClient } from "react-query";
import { queryKeys } from "./../../../react-query/constants";
import { request } from "./../../../util/APIUtil";
import {
  clearStoredUser,
  getStoredUser,
  setStoredUser,
} from "./../../../user-storage/index";
import { API_BASE_URL } from "../../../constants";
import jwt_decode from "jwt-decode";
async function getUser(user) {
  if (!user) return null;
  const { exp } = jwt_decode(user.token);
  if (Date.now() >= exp * 1000) {
    console.log("토큰만료 삭제하기");
    return null;
  }
  return request({
    url: API_BASE_URL + "/user/me",
    method: "GET",
  });
}

export function useUser() {
  const queryClient = useQueryClient();

  const { data: user } = useQuery(queryKeys.user, () => getUser(user), {
    initialData: getStoredUser,
    onSuccess: (received) => {
      if (!received) {
        // console.log(received);
        clearStoredUser();
      } else {
        setStoredUser(received);
      }
    },
  });

  const updateUser = (newUser) => {
    queryClient.setQueryData(queryKeys.user, newUser);
  };

  const clearUser = () => {
    queryClient.setQueryData(queryKeys.user, null);
    queryClient.removeQueries(queryKeys.tags);
  };

  return { user, updateUser, clearUser };
}
