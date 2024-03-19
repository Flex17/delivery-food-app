import React from "react";
import { ToastContainer } from "react-toastify";
import AppRouter from "@pages/Router/Router";
import css from "./App.module.scss";

const App = () => {
	return (
		<>
			<div className={css.app}>
				<AppRouter/>
				<ToastContainer/>
			</div>
		</>
	);
};

export default App;
