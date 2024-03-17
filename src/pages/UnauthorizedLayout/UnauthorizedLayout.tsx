import LanguageSelector from "../../ui/LanguageSelector/LanguageSelector";
import { Navigate, Outlet } from "react-router-dom";
import css from "./unauthoirizedLayout.module.scss";
import { pathKeys } from "../Router/config";

const UnauthorizedLayout = () => {
	const token = localStorage.getItem("access_token");

	if (token) return <Navigate to={pathKeys.root}/>;

	return (
		<>
			<div className={css.selector}><LanguageSelector/></div>
			<Outlet/>
		</>
	);
};

export default UnauthorizedLayout;
