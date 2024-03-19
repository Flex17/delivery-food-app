import React from "react";
import ChangeMethodLink from "./ChangeMethodLink/ChangeMethodLink";
import Title from "@ui/Title/Title";
import MainButton from "@ui/MainButton/MainButton";
import css from "./authenticationFormWrapper.module.scss";

interface AuthenticationFormWrapperProps {
	title: string,
	isValid: boolean,
	btnText: string,
	handleSubmit: () => void,
	children: React.ReactNode,
}

const AuthenticationFormWrapper = ({
	title,
	handleSubmit,
	isValid,
	btnText,
	children,
}: AuthenticationFormWrapperProps) => {

	return (
		<div className={css.wrapper}>
			<form className={css.form} onSubmit={handleSubmit}>
				<Title>{title}</Title>
				{children}
				<MainButton
					type="submit"
					state={isValid ? "default" : "disabled"}
				>
					{btnText}
				</MainButton>
				<ChangeMethodLink/>
			</form>
		</div>
	);
};

export default AuthenticationFormWrapper;
