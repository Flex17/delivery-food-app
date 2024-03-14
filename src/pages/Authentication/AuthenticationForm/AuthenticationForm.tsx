import MainInput from "../../../ui/MainInput/MainInput";
import MainButton from "../../../ui/MainButton/MainButton";
import { SubmitHandler, useForm } from "react-hook-form";
import css from "./authenticationForm.module.scss";
import { emailInputOptions, emailPlaceholder, passwordPlaceholder } from "./utils/formOptions";
import ChangeMethodLink from "./ChangeMethodLink/ChangeMethodLink";
import Title from "../../../ui/Title/Title";

export interface AuthenticationFormI {
	email: string;
	password: string;
}

interface AuthenticationFormProps {
	submit: SubmitHandler<AuthenticationFormI>,
	title: string,
	btnText: string,
}

const AuthenticationForm = ({
	submit,
	btnText,
	title,
}: AuthenticationFormProps) => {
	const {
		register,
		handleSubmit,
		formState: {
			errors,
			isValid,
		},
	} = useForm<AuthenticationFormI>({
		mode: "onBlur",
	});

	const emailRegister = {
		...register("email", emailInputOptions)
	};

	const passwordRegister = {
		...register("password", {
			required: true,
			minLength: 6,
		}),
	};

	return (
		<div className={css.wrapper}>
			<form className={css.form} onSubmit={handleSubmit(submit)}>
				<Title>{title}</Title>
				<MainInput
					className={css.input_wrapper}
					{...emailRegister}
					placeholder={emailPlaceholder}
					description={errors.email?.message}
				/>
				<MainInput
					className={css.input_wrapper}
					{...passwordRegister}
					placeholder={passwordPlaceholder}
					description={errors.password?.message}
				/>
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

export default AuthenticationForm;
