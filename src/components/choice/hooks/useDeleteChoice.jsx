import { request } from "./../../../util/APIUtil";
import { API_BASE_URL } from "./../../../constants/index";
import { useQueryClient } from "react-query";
import { useMutation } from "react-query";
import { queryKeys } from "./../../../react-query/constants";

async function deleteChoice(id) {
  const data = await request({
    url: API_BASE_URL + `/choice/${id}`,
    method: "DELETE",
  });
  return data;
}

export function useDeleteChoice() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation((id) => deleteChoice(id), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.template]);
    },
  });
  return mutate;
}
