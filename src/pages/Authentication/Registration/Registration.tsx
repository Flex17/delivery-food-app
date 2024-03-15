import { SubmitHandler } from "react-hook-form";
import AuthenticationForm, { AuthenticationFormI } from "../AuthenticationForm/AuthenticationForm";
import { useNavigate } from "react-router-dom";
import { pathKeys } from "../../Router/config";
import { authAPI } from "../../../api/AuthAPI";
import { useTranslation } from "react-i18next";

const Registration = () => {
	const {
		t,
	} = useTranslation();

	const navigate = useNavigate();

	const [registration] = authAPI.useRegistrationMutation();
	const onRegistration: SubmitHandler<AuthenticationFormI> = async (data) => {
		try {
			await registration(data);

			navigate(pathKeys.root);
		} catch (error) {
			console.log("Ошибка");
		}
	};

	return (
		<AuthenticationForm
			title={t("registration.title")}
			btnText={t("registration.btnText")}
			submit={onRegistration}
		/>
	);
};

export default Registration;
