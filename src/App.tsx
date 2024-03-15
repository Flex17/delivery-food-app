import React from "react";
import css from "./App.module.scss";
import AppRouter from "./pages/Router/Router";

const App = () => {
	return (
		<>
			<div className={css.app}>
				<AppRouter/>
			</div>
		</>
	);
};

export default App;
