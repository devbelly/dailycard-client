import { useQuery } from "react-query";
import { API_BASE_URL } from "../../../constants";
import { request } from "../../../util/APIUtil";
import { queryKeys } from "../../../react-query/constants";
import { useUser } from "../../user/hooks/useUser";

async function getTag(id) {
  const data = await request({
    url: API_BASE_URL + `/tag/${id}`,
    method: "GET",
  });

  return data;
}
export function useTag(id) {
  const { user } = useUser();

  const queryResult = useQuery([queryKeys.tags, id], () => getTag(id), {
    enabled: !!user,
  });
  return queryResult;
}
