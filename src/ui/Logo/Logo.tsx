import Logotip from "../../assets/img/pngwing.com.png";
import css from "./logo.module.scss";
import { NavLink } from "react-router-dom";
import { pathKeys } from "../../pages/Router/config";

const Logo = () => {

	return (
		<NavLink to={pathKeys.root}>
			<img className={css.logo} src={Logotip} alt="logo"/>
		</NavLink>
	);
};

export default Logo;
