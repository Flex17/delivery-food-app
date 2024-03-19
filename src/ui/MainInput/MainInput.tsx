import React from "react";
import { UseFormRegister } from "react-hook-form";
import cx from "classnames";
import css from "./mainInput.module.scss";

export interface MainInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	description?: string;
	styles?: string;
}

const MainInput = React.forwardRef<
	HTMLInputElement,
	MainInputProps & ReturnType<UseFormRegister<any>>
>(({
	placeholder,
	required,
	className,
	description,
	children,
	...props
}, ref) => {
	return (
		<div className={cx(className, css.wrapper)}>
			<input placeholder={placeholder} {...props} className={cx(css.input)} ref={ref}/>
			<span className={css.description}>{description}</span>
			{children}
		</div>
	);
});

export default MainInput;
