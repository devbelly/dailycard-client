import { useQuery } from "react-query";
import { API_BASE_URL } from "../../../constants";
import { request } from "./../../../util/APIUtil";
import { queryKeys } from "./../../../react-query/constants";

async function getFields() {
  const data = await request({
    url: API_BASE_URL + "/field",
    method: "GET",
  });

  return data.items;
}
export function useFields() {
  const fallback = [];
  const { data = fallback } = useQuery(queryKeys.fields, getFields);
  return data;
}
