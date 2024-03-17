import React from "react";
import css from "./App.module.scss";
import AppRouter from "./pages/Router/Router";
import { ToastContainer } from "react-toastify";

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
