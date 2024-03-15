import { ReactComponent as ChoicedIcon } from "../../../assets/img/choiced.svg";
import React from "react";
import css from "./dropdownItem.module.scss";
import { useTranslateMethod } from "../../../hooks/useTranslateMethod";

export type PaymentMethodT = "Наличными" | "По карте"

interface DropdownItemProps {
	method: PaymentMethodT,
	isActive: boolean,
	onChoice: (e: React.MouseEvent, method: PaymentMethodT) => void,
}

const DropdownItem = ({
	onChoice,
	method,
	isActive,
}: DropdownItemProps) => {
	const { checkMethod } = useTranslateMethod();

	return (
		<div
			role="presentation"
			className={css.wrapper}
			onClick={(e) => onChoice(e, method)}
		>
			{checkMethod(method)}
			{isActive && <div className={css.icon}><ChoicedIcon/></div>}
		</div>
	);
};

export default DropdownItem;
