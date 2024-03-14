import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./API";
import { orderSlice } from "../redux/reducers/OrderSlice";
import { OrderData } from "../models/order";

const ORDERS_URL = "https://delivery-food-db-default-rtdb.firebaseio.com/orders";

export interface MakeOrderResponse {
	name: string;
}

export interface HistoryOrderDataI extends OrderData {
	id: string,
}

export const ordersAPI = createApi({
	reducerPath: "ordersAPI",
	baseQuery: baseQuery,
	tagTypes: ["order"],
	endpoints: builder => ({
		getAll: builder.query<OrderData[], { auth: string, localId: string }>({
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
			providesTags: ["order"]
		}),
		makeOrder: builder.mutation<MakeOrderResponse, OrderData>({
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
			async onQueryStarted(arg, {
				dispatch,
				queryFulfilled,
			}) {
				try {
					const result = await queryFulfilled;

					dispatch(orderSlice.actions.setOrderId(result.data.name));
				} catch (e) {
					console.log(e);
				}
			},
		}),
	}),
});
