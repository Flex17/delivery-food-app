import { createApi } from "@reduxjs/toolkit/query/react";
import { IUser, IUserInfo } from "../models/user";
import { authSlice } from "../redux/reducers/AuthSlice";
import { IGetUserRequest } from "./types";
import { authBaseQuery } from "./API";

const SIGN_UP_URL = "/accounts:signUp";
const SIGN_IN_URL = "/accounts:signInWithPassword";
const GET_USER_URL = "/accounts:lookup";

interface RegistrationResponse {
	idToken: string,
	email: string,
	localId: string,
}

interface GetUserResponse {
	users: IUserInfo[];
}

export const authAPI = createApi({
	reducerPath: "authAPI",
	baseQuery: authBaseQuery,
	endpoints: builder => ({
		registration: builder.mutation<RegistrationResponse, IUser>({
			query: (registrationData) => ({
				url: SIGN_UP_URL,
				method: "POST",
				body: {
					...registrationData,
					returnSecureToken: true
				},
				params: {
					key: "AIzaSyB3q_WvA5Xct-kx8vnnVau9Fwp9nBMuh4g"
				}
			}),
			async onQueryStarted(arg, {
				dispatch,
				queryFulfilled,
			}) {
				try {
					const result = await queryFulfilled;

					const {
						email,
						idToken,
					} = result.data;

					localStorage.setItem("access_token", idToken);

					dispatch(authSlice.actions.setIsAuth(true));
					dispatch(authSlice.actions.setUser(email));
				} catch (e) {
					console.log(e);
				}
			},
		}),
		authorization: builder.mutation<RegistrationResponse, IUser>({
			query: (authorizationData) => ({
				url: SIGN_IN_URL,
				method: "POST",
				body: {
					...authorizationData,
					returnSecureToken: true
				},
				params: {
					key: "AIzaSyB3q_WvA5Xct-kx8vnnVau9Fwp9nBMuh4g"
				}
			}),
			async onQueryStarted(arg, {
				dispatch,
				queryFulfilled,
			}) {
				try {
					const result = await queryFulfilled;

					const {
						email,
						idToken,
					} = result.data;

					localStorage.setItem("access_token", idToken);

					dispatch(authSlice.actions.setIsAuth(true));
					dispatch(authSlice.actions.setUser(email));
				} catch (e) {
					console.log(e);
				}
			},
		}),
		getUser: builder.query<GetUserResponse, IGetUserRequest>({
			query: (data) => ({
				url: GET_USER_URL,
				method: "POST",
				body: {
					idToken: data.token,
				},
				params: {
					key: "AIzaSyB3q_WvA5Xct-kx8vnnVau9Fwp9nBMuh4g"
				}
			}),
			async onQueryStarted(arg, {
				dispatch,
				queryFulfilled,
			}) {
				try {
					const result = await queryFulfilled;

					dispatch(authSlice.actions.setIsAuth(true));
					dispatch(authSlice.actions.setUser(result.data.users[0].email));
					dispatch(authSlice.actions.setLocalId(result.data.users[0].localId));
				} catch (e) {
					console.log(e);
				}
			},
		}),
	}),
});
