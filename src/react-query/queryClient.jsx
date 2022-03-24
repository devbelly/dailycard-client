import { QueryClient } from "react-query";

function useHandleError(error) {
  // const dispatch = useDispatch();
  // error is type unknown because in js, anything can be an error (e.g. throw(5))
  // const title =
  //   error instanceof Error ? error.message : "error connecting to server";
  // dispatch(setSnackbar(true, "error", title));
}

export const defaultQueryClientOptions = {
  queries: {
    onError: useHandleError,
  },
  mutations: {
    onError: useHandleError,
  },
};

export const queryClient = new QueryClient({
  defaultOptions: defaultQueryClientOptions,
});
