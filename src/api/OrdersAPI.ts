import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, providesList } from "./API";
import { OrderData } from "../models/order";
import { IAuthRequest } from "../models/user";
import { IHistoryOrderData, IMakeOrderResponse } from "./types";

const ORDERS_URL = "/orders";

const handleObject = (response: OrderData[]) => {
	return Object.entries(response)
		.map(([id, item]) => ({
			id,
			...item
		}));
};

export const ordersAPI = createApi({
	reducerPath: "ordersAPI",
	baseQuery: baseQuery,
	tagTypes: ["order"],
	endpoints: builder => ({
		getAll: builder.query<IHistoryOrderData[], IAuthRequest>({
			query: ({
				auth,
				localId,
			}) => ({
				url: ORDERS_URL + "/" + localId + ".json",
				method: "GET",
				params: {
					auth,
				},
			}),
			transformResponse: (response: OrderData[]): IHistoryOrderData[] => {
				if (response) return handleObject(response);
				return [];
			},
			providesTags: (result) => {
				const data = result ? handleObject(result) : [];
				return providesList(data, "order");
			},
		}),
		makeOrder: builder.mutation<IMakeOrderResponse, OrderData>({
			query: ({
				auth,
				localId,
				...data
			}) => ({
				url: ORDERS_URL + "/" + localId + ".json",
				method: "POST",
				params: {
					auth,
				},
				body: data
			}),
			invalidatesTags: ["order"],
		}),
	}),
});
