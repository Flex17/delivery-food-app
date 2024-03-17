import { authSlice } from "../redux/reducers/AuthSlice";
import { useAppDispatch } from "./redux";
import { RegistrationResponse } from "../api/types";

export const useSetUser = () => {
	const dispatch = useAppDispatch();

	const setUser = ({
		idToken,
		displayName,
		email,
		refreshToken,
	}: RegistrationResponse) => {
		localStorage.setItem("access_token", idToken);
		localStorage.setItem("refresh_token", refreshToken);

		dispatch(authSlice.actions.setIsAuth(true));
		dispatch(authSlice.actions.setUser({
			email,
			displayName
		}));
	};

	return { setUser };
};
