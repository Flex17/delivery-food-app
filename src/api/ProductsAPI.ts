import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, providesList } from "./API";
import { IProduct } from "../models/product";
import { productsSlice } from "../redux/reducers/ProductsSlice";
import { IGetProductsRequest, TOTAL_RESPONSE } from "./types";
import { IAuth } from "../models/user";

const PRODUCTS_URL = "/products";

const handleObject = (products: IProduct[]) => Object.values(products);

export const productsAPI = createApi({
	reducerPath: "productsAPI",
	baseQuery: baseQuery,
	tagTypes: ["products"],
	endpoints: builder => ({
		getAll: builder.query<IProduct[], IGetProductsRequest>({
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

					dispatch(productsSlice.actions.setProducts(handleObject(result.data)));
				} catch (e) {
					console.log(e);
				}
			},
			providesTags: (result) => {
				const products = result ? handleObject(result) : [];
				return providesList(products, "products");
			},
		}),
		getTotal: builder.query<TOTAL_RESPONSE, IAuth>({
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
