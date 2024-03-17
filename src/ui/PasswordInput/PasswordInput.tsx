import MainInput, { MainInputProps } from "../MainInput/MainInput";
import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { ReactComponent as VisibleIcon } from "./icons/Visible.svg";
import { ReactComponent as InvisibleIcon } from "./icons/Invisible.svg";
import css from "./passwordInput.module.scss";

const PasswordInput = React.forwardRef<
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
	const [visible, setVisible] = useState(false);

	const handleVisibility = () => setVisible(!visible);

	return (
		<MainInput
			{...props}
			className={className}
			type={visible ? "text" : "password"}
		>
			<div className={css.icon} onClick={handleVisibility}>
				{
					visible
						? <VisibleIcon/>
						: <InvisibleIcon/>
				}
			</div>
		</MainInput>
	);
});

export default PasswordInput;
