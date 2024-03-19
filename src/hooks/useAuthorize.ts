import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { authAPI } from "@api/AuthAPI";
import { useSetUser } from "./useSetUser";
import { useFormOptions } from "./useFormOptions";
import { SubmitHandler, useForm } from "react-hook-form";
import { pathKeys } from "@pages/Router/config";
import { toast } from "react-toastify";
import { AuthorizationFormI } from "@pages/Authentication/Authorization/Authorization";

export const useAuthorize = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();

	const [authorization] = authAPI.useAuthorizationMutation();

	const { setUser } = useSetUser();

	const {
		emailInputOptions,
		passwordInputOptions
	} = useFormOptions();

	const {
		register,
		handleSubmit,
		formState: {
			errors,
			isValid,
		},
	} = useForm<AuthorizationFormI>({
		mode: "onBlur",
	});

	const emailRegister = {
		...register("email", emailInputOptions)
	};

	const passwordRegister = {
		...register("password", passwordInputOptions),
	};
	const onAuthorization: SubmitHandler<AuthorizationFormI> = async (data) => {
		try {
			const userData = await authorization(data)
				.unwrap();
			setUser({ ...userData });
			navigate(pathKeys.root);
		} catch (error) {
			toast.error(t("error"));
		}
	};

	const onSubmit = handleSubmit(onAuthorization);

	return {
		errors,
		isValid,
		emailRegister,
		passwordRegister,
		onSubmit
	};
};
