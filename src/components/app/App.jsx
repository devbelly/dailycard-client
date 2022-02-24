import Snackbars from "../../common/Snackbars";
import { ReactQueryDevtools } from "react-query/devtools";
import CustomRoutes from "./CustomRoutes";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../react-query/queryClient";
import Loading from "./Loading";
import Navbar from "./Navbar";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Loading />
      <Snackbars />
      <Navbar />
      <CustomRoutes />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
