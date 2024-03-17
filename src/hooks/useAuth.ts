import { useMemo } from "react";
import { useAppSelector } from "./redux";

export const useAuthToken = () => {
	const auth = localStorage.getItem("access_token") || "";
	const localId = useAppSelector(state => state.authReducer.localId);

	return useMemo(() => ({
		auth,
		localId
	}), [auth, localId]);
};
