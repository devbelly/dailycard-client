import { request } from "./../../../util/APIUtil";
import { API_BASE_URL } from "./../../../constants/index";
import { useQueryClient } from "react-query";
import { useMutation } from "react-query";
import { queryKeys } from "./../../../react-query/constants";

async function createField(fieldRequest) {
  const data = await request({
    url: API_BASE_URL + "/field",
    method: "POST",
    body: JSON.stringify(fieldRequest),
  });
  return data;
}

export function useCreateField() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(createField, {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.fields]);
    },
  });
  return mutate;
}
