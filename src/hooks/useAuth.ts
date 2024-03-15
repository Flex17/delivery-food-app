import { useMemo } from "react";

export const useAuthToken = (): string => {
	const token = localStorage.getItem("access_token") || "";

	return useMemo(() => token, [token]);
};
