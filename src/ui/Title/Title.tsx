import React from "react";
import cx from "classnames";
import css from "./title.module.scss";

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
