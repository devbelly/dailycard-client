import { useQuery, useQueryClient } from "react-query";
import { API_BASE_URL } from "../../../constants";
import { request } from "../../../util/APIUtil";
import { queryKeys } from "../../../react-query/constants";
import { useUser } from "./../../user/hooks/useUser";

async function getTemplates() {
  const data = await request({
    url: API_BASE_URL + "/template",
    method: "GET",
  });

  return data.items;
}
export function useTemplates() {
  const { user } = useUser();
  const fallback = [];
  const { data = fallback } = useQuery(queryKeys.templates, getTemplates, {
    enabled: !!user,
  });
  return data;
}

export function usePrefetchTemplates() {
  const queryClient = useQueryClient();
  queryClient.prefetchQuery(queryKeys.templates, getTemplates);
}
