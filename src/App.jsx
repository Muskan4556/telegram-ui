import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Body />
      </>
    ),
    children: [
      
      {
        path: "/:id",
        element: (<Body/>
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
