import React, { useState } from "react";
import css from "./dropdown.module.scss";
import cx from "classnames";
import { ReactComponent as CloseIcon } from "../..//assets/img/dropwDownClose.svg";
import { ReactComponent as OpenIcon } from "../../assets/img/dropDownOpen.svg";
import DropdownItem, { PaymentMethodT } from "./DropdownItem/DropdownItem";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { useTranslateMethod } from "../../hooks/useTranslateMethod";

interface DropdownProps {
	currentItem: PaymentMethodT | undefined,
	setCurrentMethod: (value: PaymentMethodT) => void,
	methods: PaymentMethodT[];
}

const Dropdown = ({
	methods,
	setCurrentMethod,
	currentItem,
}: DropdownProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const ref = useOutsideClick(() => {
		setIsOpen(false);
	});

	const onChoiceProjects = (e: React.MouseEvent, method: PaymentMethodT) => {
		e.stopPropagation();
		setCurrentMethod(method);
	};

	const openCloseArrow = isOpen
		? <OpenIcon/>
		: <CloseIcon/>;

	const { checkMethod } = useTranslateMethod();

	return (
		<div className={css.wrapper}>
			<div
				role="presentation"
				className={css.container}
				onClick={() => setIsOpen((prev) => !prev)}
				ref={ref}
			>
				<div className={cx(css.main, isOpen && css.main_opened)}>
					<span>{checkMethod(currentItem)}</span>
					{openCloseArrow}
				</div>

				<div className={css.hidden}>
					<div className={cx(isOpen ? css.visible : css.invisible, css.block)}>
						{methods.map((method) => (
							<DropdownItem
								key={method}
								method={method}
								onChoice={onChoiceProjects}
								isActive={currentItem === method}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dropdown;
