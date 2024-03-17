import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const providesList = <R extends { id: string | number }[], T extends string>(
	resultsWithIds: R | undefined,
	tagType: T
) => {
	return resultsWithIds
		? [...resultsWithIds.map(({ id }) => ({
			type: tagType,
			id
		}))]
		: [tagType];
};

export const baseQuery = fetchBaseQuery({
	baseUrl: "https://delivery-food-db-default-rtdb.firebaseio.com",
});

export const authBaseQuery = fetchBaseQuery({
	baseUrl: "https://identitytoolkit.googleapis.com/v1/",
});

