import { NavLink } from "react-router-dom";
import { pathKeys } from "../../pages/Router/config";
import css from "./navbar.module.scss";
import cx from "classnames";
import { ReactComponent as CartIcon } from "../../assets/img/cart.svg";
import Logo from "../Logo/Logo";

const Navbar = () => {

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
							Меню
						</NavLink>
						<NavLink
							className={({ isActive }) => isActive ? css.nav_active : css.nav_item}
							to={pathKeys.history()}
						>
							Заказы
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
