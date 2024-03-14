import { SubmitHandler } from "react-hook-form";
import AuthenticationForm, { AuthenticationFormI } from "../AuthenticationForm/AuthenticationForm";
import { useNavigate } from "react-router-dom";
import { pathKeys } from "../../Router/config";
import { authAPI } from "../../../api/AuthAPI";

const Registration = () => {
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
		<AuthenticationForm title="Регистрация" btnText="Зарегистрироваться" submit={onRegistration}/>
	);
};

export default Registration;
