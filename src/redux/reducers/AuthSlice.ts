import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthStateI {
	isAuth: boolean,
	email: string,
	localId: string,
}

const initialState: AuthStateI = {
	isAuth: false,
	email: "",
	localId: "",
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setIsAuth(state, action: PayloadAction<boolean>) {
			state.isAuth = action.payload;
		},
		setUser(state, action: PayloadAction<string>) {
			state.email = action.payload;
		},
		setLocalId(state, action: PayloadAction<string>) {
			state.localId = action.payload;
		},
	},
});

export default authSlice.reducer;

