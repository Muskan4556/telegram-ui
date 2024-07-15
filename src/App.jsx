import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import LeftCont from "./components/LeftCont";
import RightCont from "./components/RightCont";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: (
          <>
            <LeftCont />
            <RightCont />
          </>
        ),
      },
      {
        path: "/:id",
        element: (
          <>
            <LeftCont />
            <RightCont />
          </>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
