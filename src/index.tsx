import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "./redux/store";
import "./i18n";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

const store = setupStore();

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</Provider>
);
