import React from "react";
import css from "./title.module.scss";
import cx from "classnames";

interface TitleProps {
	children: React.ReactNode,
	styles?: string,
}

const Title = ({
	styles,
	children
}: TitleProps) => {

	return (
		<h1 className={cx(styles, css.title)}>{children}</h1>
	);
};

export default Title;
