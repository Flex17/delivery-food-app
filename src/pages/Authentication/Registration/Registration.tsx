import { useTranslation } from "react-i18next";
import { emailPlaceholder } from "../../../hooks/useFormOptions";
import css from "../authenticationForm.module.scss";
import AuthenticationFormWrapper from "../../../ui/AuthenticationFormWrapper/AuthenticationFormWrapper";
import MainInput from "../../../ui/MainInput/MainInput";
import PasswordInput from "../../../ui/PasswordInput/PasswordInput";
import { useRegister } from "../../../hooks/useRegister";

export interface RegistrationFormI {
	displayName: string;
	phone: string;
	email: string;
	password: string;
}

const Registration = () => {
	const { t } = useTranslation();

	const {
		errors,
		isValid,
		emailRegister,
		nameRegister,
		passwordRegister,
		onSubmit
	} = useRegister();

	return (
		<AuthenticationFormWrapper
			title={t("registration.title")}
			isValid={isValid}
			btnText={t("registration.btnText")}
			handleSubmit={onSubmit}
		>
			<MainInput
				className={css.input_wrapper}
				{...nameRegister}
				placeholder={t("form.namePlaceholder")}
				description={errors.displayName?.message}
			/>
			<MainInput
				className={css.input_wrapper}
				{...emailRegister}
				placeholder={emailPlaceholder}
				description={errors.email?.message}
			/>
			<PasswordInput
				{...passwordRegister}
				className={css.input_wrapper}
				placeholder={t("form.passwordPlaceholder")}
				description={errors.password?.message}
			/>
		</AuthenticationFormWrapper>
	);
};

export default Registration;
