import React from "react";
import css from "./quantityButton.module.scss";

interface QuantityButtonProps {
	onClick: () => void,
	children: React.ReactNode,
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
