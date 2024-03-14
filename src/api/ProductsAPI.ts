import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./API";
import { IProduct } from "../models/product";

const PRODUCTS_URL = "https://delivery-food-db-default-rtdb.firebaseio.com/products.json";

export interface GetProductsResponse {
	data: IProduct[],
	total: number,
}

export const productsAPI = createApi({
	reducerPath: "productsAPI",
	baseQuery: baseQuery,
	endpoints: builder => ({
		getAll: builder.query<GetProductsResponse, { auth: string }>({
			query: ({
				auth,
			}) => ({
				url: PRODUCTS_URL,
				method: "GET",
				params: {
					orderBy: "\"id\"",
					auth,
				}
			})
		}),
	}),
});
