import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/AuthSlice";
import productsReducer from "./reducers/ProductsSlice";
import orderReducer from "./reducers/OrderSlice";
import { authAPI } from "../api/AuthAPI";
import { ordersAPI } from "../api/OrdersAPI";
import { productsAPI } from "../api/ProductsAPI";

const rootReducer = combineReducers({
	authReducer,
	orderReducer,
	productsReducer,
	[authAPI.reducerPath]: authAPI.reducer,
	[ordersAPI.reducerPath]: ordersAPI.reducer,
	[productsAPI.reducerPath]: productsAPI.reducer,
});

export const setupStore = () => configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware()
		.concat([authAPI.middleware, productsAPI.middleware, ordersAPI.middleware]),
});

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
