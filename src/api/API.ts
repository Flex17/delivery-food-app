import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
	baseUrl: "https://identitytoolkit.googleapis.com/v1/",
});
