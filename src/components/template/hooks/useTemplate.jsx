import { API_BASE_URL } from "../../../constants";
import { request } from "./../../../util/APIUtil";
import { queryKeys } from "./../../../react-query/constants";
import { useQuery } from "react-query";

async function getTemplateById(id) {
  const data = await request({
    url: API_BASE_URL + `/template/${id}`,
    method: "GET",
  });
  return data;
}

export function useTemplate(id) {
  const data = useQuery(queryKeys.template, () => getTemplateById(id));
  return data;
}
