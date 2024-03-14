import React from "react";
import css from "./mainInput.module.scss";
import cx from "classnames";
import { UseFormRegister } from "react-hook-form";

interface MainInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
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
	...props
}, ref) => {
	return (
		<div className={cx(className, css.wrapper)}>
			<input placeholder={placeholder} {...props} className={cx(css.input)} ref={ref}/>
			<span className={css.description}>{description}</span>
		</div>
	);
});

export default MainInput;
