import { useQuery } from "react-query";
import { API_BASE_URL } from "../../../constants";
import { request } from "./../../../util/APIUtil";
import { queryKeys } from "./../../../react-query/constants";
import { useUser } from "./../../user/hooks/useUser";

async function getCards(id) {
  const data = await request({
    url: API_BASE_URL + `/card/${id}`,
    method: "GET",
  });

  return data.items;
}

export function useCard(id) {
  const fallback = [];
  const { user } = useUser();

  const { data = fallback } = useQuery(
    [queryKeys.cards, id],
    () => getCards(id),
    { enabled: !!user }
  );
  return data;
}
