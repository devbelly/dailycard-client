import { useQuery, useQueryClient } from "react-query";
import { queryKeys } from "./../../../react-query/constants";
import { request } from "./../../../util/APIUtil";
import {
  clearStoredUser,
  getStoredUser,
  setStoredUser,
} from "./../../../user-storage/index";
import { API_BASE_URL } from "../../../constants";

async function getUser(user) {
  if (!user) return null;
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
