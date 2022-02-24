import { useQuery } from "react-query";
import { API_BASE_URL } from "../../../constants";
import { request } from "./../../../util/APIUtil";
import { queryKeys } from "./../../../react-query/constants";
import { useUser } from "./../../user/hooks/useUser";

async function getTags() {
  const data = await request({
    url: API_BASE_URL + "/tag/list",
    method: "GET",
  });

  return data.items;
}
export function useTags() {
  const { user } = useUser();
  const fallback = [{ id: 1 }];

  const { data = fallback } = useQuery(queryKeys.tags, getTags, {
    enabled: !!user,
  });
  return data;
}
