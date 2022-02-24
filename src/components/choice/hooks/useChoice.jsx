import { useQuery } from "react-query";
import { API_BASE_URL } from "../../../constants";
import { request } from "./../../../util/APIUtil";
import { queryKeys } from "./../../../react-query/constants";

async function getChoice(id) {
  const data = await request({
    url: API_BASE_URL + `/choice/${id}`,
    method: "GET",
  });

  return data;
}

/**
 * {data} 를 리턴하는 대신 data를 리턴한다.
 */
export function useChoice(id) {
  const queryResult = useQuery([queryKeys.choice, id], () => getChoice(id));
  return queryResult;
}
