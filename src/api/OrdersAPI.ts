import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth, providesList } from "./API";
import { OrderData } from "@models/order";
import { IAuthRequest } from "@models/user";
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
	baseQuery: baseQueryWithReauth,
	tagTypes: ["order"],
	endpoints: builder => ({
		getAll: builder.query<IHistoryOrderData[], IAuthRequest>({
			query: ({
				localId,
			}) => ({
				url: ORDERS_URL + "/" + localId + ".json",
				method: "GET",
				params: {}
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
				localId,
				...data
			}) => ({
				url: ORDERS_URL + "/" + localId + ".json",
				method: "POST",
				params: {},
				body: data
			}),
			invalidatesTags: ["order"],
		}),
	}),
});
