import { NavLink } from "react-router-dom";
import Logotip from "../../assets/img/pngwing.com.png";
import { pathKeys } from "@pages/Router/config";
import css from "./logo.module.scss";

const Logo = () => {

	return (
		<NavLink to={pathKeys.root}>
			<img className={css.logo} src={Logotip} alt="logo"/>
		</NavLink>
	);
};

export default Logo;
