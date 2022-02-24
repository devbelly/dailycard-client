import { request } from "../../../util/APIUtil";
import { API_BASE_URL } from "../../../constants/index";
import { useMutation, useQueryClient } from "react-query";
import { queryKeys } from "../../../react-query/constants";

async function updateTag(tagRequest) {
  const data = await request({
    url: API_BASE_URL + "/tag",
    method: "PUT",
    body: JSON.stringify(tagRequest),
  });
  return data;
}

export function useUpdateTag() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation((tagRequest) => updateTag(tagRequest), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.tags]);
    },
  });
  return mutate;
}
