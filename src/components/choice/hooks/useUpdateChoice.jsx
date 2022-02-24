import { request } from "../../../util/APIUtil";
import { API_BASE_URL } from "../../../constants/index";
import { useQueryClient } from "react-query";
import { useMutation } from "react-query";
import { queryKeys } from "../../../react-query/constants";

async function updateChoice({ choiceRequest, id }) {
  const data = await request({
    url: API_BASE_URL + `/choice/${id}`,
    method: "PUT",
    body: JSON.stringify(choiceRequest),
  });
  return data;
}

export function useUpdateChoice() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(updateChoice, {
    onSuccess: () => {
      queryClient.invalidateQueries(queryKeys.template);
    },
  });
  return mutate;
}
