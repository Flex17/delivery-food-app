import { createApi } from "@reduxjs/toolkit/query/react";
import { IUser } from "@models/user";
import { authSlice } from "@redux/reducers/AuthSlice";
import { GetUserResponse, IGetUserRequest, IRegistrationRequest, RegistrationResponse } from "./types";
import { authBaseQueryWithReauth } from "./API";

const SIGN_UP_URL = "/accounts:signUp";
const SIGN_IN_URL = "/accounts:signInWithPassword";
const GET_USER_URL = "/accounts:lookup";

export const authAPI = createApi({
	reducerPath: "authAPI",
	baseQuery: authBaseQueryWithReauth,
	endpoints: builder => ({
		registration: builder.mutation<RegistrationResponse, IRegistrationRequest>({
			query: (registrationData) => ({
				url: SIGN_UP_URL,
				method: "POST",
				body: {
					...registrationData,
					returnSecureToken: true
				},
				params: {}
			})
		}),
		authorization: builder.mutation<RegistrationResponse, IUser>({
			query: (authorizationData) => ({
				url: SIGN_IN_URL,
				method: "POST",
				body: {
					...authorizationData,
					returnSecureToken: true
				},
				params: {}
			})
		}),
		getUser: builder.query<GetUserResponse, IGetUserRequest>({
			query: (data) => ({
				url: GET_USER_URL,
				method: "POST",
				body: {
					idToken: data.token,
				},
				params: {}
			}),
			async onQueryStarted(arg, {
				dispatch,
				queryFulfilled,
			}) {
				try {
					const result = await queryFulfilled;

					const {
						email,
						displayName
					} = result.data.users[0];
					dispatch(authSlice.actions.setIsAuth(true));
					dispatch(authSlice.actions.setUser({
						email,
						displayName
					}));
					dispatch(authSlice.actions.setLocalId(result.data.users[0].localId));
				} catch (e) {

				}
			},
		}),
	}),
});
