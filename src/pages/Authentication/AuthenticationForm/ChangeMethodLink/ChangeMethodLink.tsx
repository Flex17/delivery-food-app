import { NavLink, useLocation } from "react-router-dom";
import css from "./changeMethodLink.module.scss";
import { useMemo } from "react";

const ChangeMethodLink = () => {
	const { pathname } = useLocation();

	const link = useMemo(() => {
		if (pathname.includes("registration")) return "/authorization";
		return "/registration";
	}, [pathname]);

	const text = pathname.includes("/registration") ? "Есть аккаунт? Войти" : "Нет аккаунта? Зарегистрироваться";

	return (
		<NavLink className={css.wrapper} to={link}>{text}</NavLink>
	);
};

export default ChangeMethodLink;
