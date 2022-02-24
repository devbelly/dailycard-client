import { request } from "./../../../util/APIUtil";
import { API_BASE_URL } from "./../../../constants/index";
import { useQueryClient } from "react-query";
import { useMutation } from "react-query";
import { queryKeys } from "./../../../react-query/constants";

async function createTemplate(templateRequest) {
  const data = await request({
    url: API_BASE_URL + "/template",
    method: "POST",
    body: JSON.stringify(templateRequest),
  });
  return data;
}

export function useCreateTemplate() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    (templateRequest) => createTemplate(templateRequest),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([queryKeys.templates]);
      },
    }
  );
  return mutate;
}
