import { useMutation, useQueryClient } from "react-query";
import { request } from "../../../util/APIUtil";
import { API_BASE_URL } from "./../../../constants/index";
import { queryKeys } from "./../../../react-query/constants";

async function createChoice({ choiceRequest, id }) {
  const data = await request({
    url: API_BASE_URL + `/choice/${id}`,
    method: "POST",
    body: JSON.stringify(choiceRequest),
  });
  return data;
}

export function useCreateChoice() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(createChoice, {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.template]);
    },
  });
  return mutate;
}
