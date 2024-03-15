import { NavLink } from "react-router-dom";
import { pathKeys } from "../../pages/Router/config";
import css from "./navbar.module.scss";
import cx from "classnames";
import { ReactComponent as CartIcon } from "../../assets/img/cart.svg";
import Logo from "../Logo/Logo";
import { useTranslation } from "react-i18next";

const Navbar = () => {
	const { t } = useTranslation();

	return (
		<nav className={css.wrapper}>
			<div className={cx("wrapper", css.nav)}>
				<div className={css.nav_block}>
					<Logo/>
					<div className={css.nav_items}>
						<NavLink
							className={({ isActive }) => isActive ? css.nav_active : css.nav_item}
							to={pathKeys.root}
						>
							{t("navbar.menu")}
						</NavLink>
						<NavLink
							className={({ isActive }) => isActive ? css.nav_active : css.nav_item}
							to={pathKeys.history()}
						>
							{t("navbar.orders")}
						</NavLink>
					</div>
				</div>
				<NavLink to={pathKeys.order()}>
					<CartIcon/>
				</NavLink>
			</div>
		</nav>
	);
};

export default Navbar;
