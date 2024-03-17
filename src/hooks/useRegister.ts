import { useNavigate } from "react-router-dom";
import { authAPI } from "../api/AuthAPI";
import { useFormOptions } from "./useFormOptions";
import { useSetUser } from "./useSetUser";
import { SubmitHandler, useForm } from "react-hook-form";
import { pathKeys } from "../pages/Router/config";
import { toast } from "react-toastify";
import { RegistrationFormI } from "../pages/Authentication/Registration/Registration";
import { useTranslation } from "react-i18next";

export const useRegister = () => {
	const { t } = useTranslation();

	const navigate = useNavigate();

	const [registration] = authAPI.useRegistrationMutation();

	const {
		emailInputOptions,
		textInputOptions,
		passwordInputOptions
	} = useFormOptions();

	const { setUser } = useSetUser();

	const {
		register,
		handleSubmit,
		formState: {
			errors,
			isValid,
		},
	} = useForm<RegistrationFormI>({
		mode: "onBlur",
	});

	const emailRegister = {
		...register("email", emailInputOptions)
	};

	const nameRegister = {
		...register("displayName", textInputOptions)
	};

	const passwordRegister = {
		...register("password", passwordInputOptions),
	};

	const onRegistration: SubmitHandler<RegistrationFormI> = async (data) => {
		try {
			const userData = await registration(data)
				.unwrap();
			setUser({ ...userData });
			navigate(pathKeys.root);
		} catch (error) {
			toast.error(t("error"));
		}
	};

	const onSubmit = handleSubmit(onRegistration);

	return {
		isValid,
		errors,
		emailRegister,
		nameRegister,
		passwordRegister,
		onSubmit
	};
};
