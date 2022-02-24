import { request } from "./../../../util/APIUtil";
import { API_BASE_URL } from "./../../../constants/index";
import { useQueryClient } from "react-query";
import { useMutation } from "react-query";
import { queryKeys } from "./../../../react-query/constants";

async function updateField({ fieldRequest, id }) {
  const data = await request({
    url: API_BASE_URL + `/field/${id}`,
    method: "PUT",
    body: JSON.stringify(fieldRequest),
  });
  return data;
}

export function useUpdateField() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(updateField, {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.fields]);
    },
  });
  return mutate;
}
