import { useQuery } from "react-query";
import { API_BASE_URL } from "../../../constants";
import { request } from "./../../../util/APIUtil";
import { queryKeys } from "./../../../react-query/constants";

async function getField(id) {
  const data = await request({
    url: API_BASE_URL + `/field/${id}`,
    method: "GET",
  });

  return data;
}

/**
 * {data} 를 리턴하는 대신 data를 리턴한다.
 */
export function useField(id) {
  const queryResult = useQuery([queryKeys.field, id], () => getField(id));
  return queryResult;
}
