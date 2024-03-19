import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./API";
import { ICartProduct, IProduct } from "@models/product";
import { IAuthRequest } from "@models/user";
import { IAddProductRequest, IHandleProductRequest } from "./types";

const CARTS_URL = "/carts";

const handleObject = (response: ICartProduct[]) => {
	return Object.entries(response)
		.map(([key, value]) => ({
			id: key,
			product: value.product,
			quantity: value.quantity
		}));
};

export const cartAPI = createApi({
	reducerPath: "cartAPI",
	baseQuery: baseQueryWithReauth,
	tagTypes: ["cart"],
	endpoints: builder => ({
		getCart: builder.query<ICartProduct[], IAuthRequest>({
			query: ({
				localId,
			}) => ({
				url: CARTS_URL + "/" + localId + ".json",
				method: "GET",
				params: {}
			}),
			transformResponse: (response: ICartProduct[]) => {
				if (response) return handleObject(response);
				return [];
			},
			providesTags: ["cart"]
		}),
		updateProductQuantity: builder.mutation<IProduct[], IHandleProductRequest>({
			query: ({
				localId,
				...data
			}) => ({
				url: CARTS_URL + "/" + localId + "/" + data.product.id + ".json",
				method: "PUT",
				params: {
					// auth,
				},
				body: {
					...data.product
				},
			}),
			invalidatesTags: ["cart"],
		}),
		addProduct: builder.mutation<void, IAddProductRequest>({
			query: ({
				localId,
				product,
				...data
			}) => ({
				url: CARTS_URL + "/" + localId + ".json",
				method: "POST",
				params: {},
				body: {
					...data,
					...product,
				}
			}),
			invalidatesTags: ["cart"],
		}),
		removeProduct: builder.mutation<void, IHandleProductRequest>({
			query: ({
				localId,
				...data
			}) => ({
				url: CARTS_URL + "/" + localId + "/" + data.product.id + ".json",
				method: "DELETE",
				params: {},
				body: data
			}),
			invalidatesTags: ["cart"],
		}),
		clearCart: builder.mutation<void, IAuthRequest>({
			query: ({
				localId,
			}) => ({
				url: CARTS_URL + "/" + localId + ".json",
				method: "DELETE",
				params: {},
			}),
			invalidatesTags: ["cart"],
		}),
	}),
});
