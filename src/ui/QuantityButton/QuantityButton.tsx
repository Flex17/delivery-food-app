import css from "./quantityButton.module.scss";
import React from "react";

interface QuantityButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const QuantityButton = ({
	children,
	onClick
}: QuantityButtonProps) => {

	return (
		<button type="button" onClick={onClick} className={css.wrapper}>
			{children}
		</button>
	);
};

export default QuantityButton;
