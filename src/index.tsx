import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { injectStyle } from "react-toastify/dist/inject-style";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { setupStore } from "@redux/store";
import "./index.scss";
import "./i18n";

injectStyle();

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
