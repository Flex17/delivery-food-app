import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import css from "./changeMethodLink.module.scss";

const ChangeMethodLink = () => {
	const {
		t,
	} = useTranslation();

	const { pathname } = useLocation();

	const link = useMemo(() => {
		if (pathname.includes("registration")) return "/authorization";
		return "/registration";
	}, [pathname]);

	const text = pathname.includes("/registration") ? t("registration.haveAccount") : t("authorization.haveAccount");

	return (
		<NavLink className={css.wrapper} to={link}>{text}</NavLink>
	);
};

export default ChangeMethodLink;
