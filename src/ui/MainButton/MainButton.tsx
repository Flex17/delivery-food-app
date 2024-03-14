import React from "react";
import cx from "classnames";
import css from "./mainButton.module.scss";

type MainButtonStateT = "default" | "disabled" | "bordered";

interface MainButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	styles?: string;
	state: MainButtonStateT;
}

const MainButton = ({
	state,
	styles,
	children,
	...props
}: MainButtonProps) => {

	return (
		<button {...props} disabled={state === "disabled"}
				className={cx(css.wrapper, css[state], styles)}>{children}</button>
	);
};

export default MainButton;
