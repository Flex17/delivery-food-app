import LanguageSelector from "../../ui/LanguageSelector/LanguageSelector";
import { Outlet } from "react-router-dom";
import css from "./unauthoirizedLayout.module.scss";

const UnauthorizedLayout = () => {

	return (
		<>
			<div className={css.selector}><LanguageSelector/></div>
			<Outlet/>
		</>
	);
};

export default UnauthorizedLayout;
