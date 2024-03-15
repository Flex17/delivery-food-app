import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./API";
import { IProduct } from "../models/product";
import { productsSlice } from "../redux/reducers/ProductsSlice";

const PRODUCTS_URL = "https://delivery-food-db-default-rtdb.firebaseio.com/products";

type TOTAL_RESPONSE = number;

export const productsAPI = createApi({
	reducerPath: "productsAPI",
	baseQuery: baseQuery,
	endpoints: builder => ({
		getAll: builder.mutation<IProduct[], { auth: string, startAt: number, endAt: number }>({
			query: ({
				auth,
				startAt,
				endAt,
			}) => ({
				url: PRODUCTS_URL + "/data.json",
				method: "GET",
				params: {
					orderBy: "\"id\"",
					auth,
					startAt,
					endAt
				}
			}),
			async onQueryStarted(arg, {
				dispatch,
				queryFulfilled,
			}) {
				try {
					const result = await queryFulfilled;

					dispatch(productsSlice.actions.setProducts(Object.values(result.data)));
				} catch (e) {
					console.log(e);
				}
			},
		}),
		getTotal: builder.query<TOTAL_RESPONSE, { auth: string }>({
			query: ({
				auth,
			}) => ({
				url: PRODUCTS_URL + "/total.json",
				method: "GET",
				params: {
					auth,
				}
			}),
			async onQueryStarted(arg, {
				dispatch,
				queryFulfilled,
			}) {
				try {
					const result = await queryFulfilled;

					dispatch(productsSlice.actions.setTotal(result.data));
				} catch (e) {
					console.log(e);
				}
			},
		}),
	}),
});
