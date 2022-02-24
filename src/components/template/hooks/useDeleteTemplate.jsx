import { useMutation, useQueryClient } from "react-query";
import { request } from "../../../util/APIUtil";
import { API_BASE_URL } from "./../../../constants/index";
import { queryKeys } from "./../../../react-query/constants";

async function deleteTemplate(id) {
  const data = await request({
    url: API_BASE_URL + `/template/${id}`,
    method: "DELETE",
  });
  return data;
}

export function useDeleteTemplate() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation((id) => deleteTemplate(id), {
    onSuccess: () => {
      queryClient.invalidateQueries([queryKeys.templates]);
    },
  });
  return mutate;
}
