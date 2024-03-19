import { useTranslation } from "react-i18next";
import AuthenticationFormWrapper from "@ui/AuthenticationFormWrapper/AuthenticationFormWrapper";
import { emailPlaceholder } from "@hooks/useFormOptions";
import MainInput from "@ui/MainInput/MainInput";
import css from "../authenticationForm.module.scss";
import PasswordInput from "@ui/PasswordInput/PasswordInput";
import { useAuthorize } from "@hooks/useAuthorize";

export interface AuthorizationFormI {
	email: string;
	password: string;
}

const Authorization = () => {
	const { t } = useTranslation();

	const {
		errors,
		isValid,
		emailRegister,
		passwordRegister,
		onSubmit
	} = useAuthorize();

	return (
		<AuthenticationFormWrapper
			title={t("authorization.title")}
			isValid={isValid}
			btnText={t("authorization.btnText")}
			handleSubmit={onSubmit}
		>
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

export default Authorization;
