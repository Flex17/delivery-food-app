import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthStateI {
	isAuth: boolean,
	email: string,
	displayName: string,
	localId: string,
}

const initialState: AuthStateI = {
	isAuth: false,
	email: "",
	displayName: "",
	localId: "",
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setIsAuth(state, action: PayloadAction<boolean>) {
			state.isAuth = action.payload;
		},
		setUser(state, action: PayloadAction<{ email: string, displayName: string }>) {
			state.email = action.payload.email;
			state.displayName = action.payload.displayName;
		},
		setLocalId(state, action: PayloadAction<string>) {
			state.localId = action.payload;
		},
	},
});

export default authSlice.reducer;

