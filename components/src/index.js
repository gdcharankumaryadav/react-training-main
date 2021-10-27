import React, { useEffect } from "react";
import ReactDom from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import GetTime from "./Components/GetTime";
import rootReducer from "./Reducers/rootReducers";
import RenderTime from "./Components/RenderTime";
const App = () => {
  useEffect(() => {});
  return (
    <div>
      <RenderTime>
        <GetTime time="10.12 am" />
      </RenderTime>
    </div>
  );
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
