import { request } from "../../../util/APIUtil";
import { API_BASE_URL } from "../../../constants/index";
import { useMutation, useQueryClient } from "react-query";
import { queryKeys } from "../../../react-query/constants";

async function createTag(tagRequest) {
  const data = await request({
    url: API_BASE_URL + "/tag",
    method: "POST",
    body: JSON.stringify(tagRequest),
  });
  return data;
}

export function useCreateTag() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation((tagRequest) => createTag(tagRequest), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.tags]);
    },
  });
  return mutate;
}
