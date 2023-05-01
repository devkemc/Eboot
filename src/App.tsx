import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {persistor, store} from "./Redux/root/store";
import 'react-toastify/dist/ReactToastify.css';
import {Router} from "./Router";
import {ToastContainer} from "react-toastify";
import {PersistGate} from "redux-persist/integration/react";


export const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer/>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router/>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
};
