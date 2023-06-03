import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./routers";
import store from "./stores/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
