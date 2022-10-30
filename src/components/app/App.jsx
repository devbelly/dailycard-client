import Snackbars from "../../common/Snackbars";
import { ReactQueryDevtools } from "react-query/devtools";
import CustomRoutes from "./CustomRoutes";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../react-query/queryClient";
import Loading from "./Loading";

import "./App.css";
import Navbar from "../Navbar";
import Height80 from "./../Height80/index";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Loading />
      <Snackbars />
      <Height80 />
      <Navbar />
      <CustomRoutes />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default App;
