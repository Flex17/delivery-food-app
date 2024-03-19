import { Navigate, Outlet, useLocation } from "react-router-dom";
import { pathKeys } from "./config";
import { authAPI } from "@api/AuthAPI";
import { useAppSelector } from "@hooks/redux";
import Loader from "@ui/Loader/Loader";

const RequireAuth = () => {
	const location = useLocation();

	const isAuth = useAppSelector(state => state.authReducer.isAuth);

	const token = localStorage.getItem("access_token");

	const {
		isLoading
	} = authAPI.useGetUserQuery({ token: token || "" });

	if (isLoading) {
		return <Loader/>;
	}

	return (
		isAuth
			? <Outlet/>
			: <Navigate to={pathKeys.registration()} state={{ from: location }} replace/>
	);
};

export default RequireAuth;
