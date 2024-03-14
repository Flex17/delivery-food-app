import { SubmitHandler } from "react-hook-form";
import AuthenticationForm, { AuthenticationFormI } from "../AuthenticationForm/AuthenticationForm";
import { pathKeys } from "../../Router/config";
import { useNavigate } from "react-router-dom";
import { authAPI } from "../../../api/AuthAPI";

const Authorization = () => {
	const navigate = useNavigate();

	const [authorization] = authAPI.useAuthorizationMutation();

	const onAuthorization: SubmitHandler<AuthenticationFormI> = async (data) => {
		try {
			await authorization(data);

			navigate(pathKeys.root);
		} catch (error) {
			console.log("Ошибка");
		}
	};

	return (
		<AuthenticationForm title="Вход" btnText="Войти" submit={onAuthorization}/>
	);
};

export default Authorization;
