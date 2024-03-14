import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../models/product";
import { GetProductsResponse } from "../../api/ProductsAPI";

interface ProductsStateI {
	products: IProduct[],
	total: number,
}

const initialState: ProductsStateI = {
	total: 0,
	products: [],
};

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		setProducts(state, action: PayloadAction<GetProductsResponse>) {
			state.products = action.payload.data;
			state.total = action.payload.total;
		},
	},
});

export default productsSlice.reducer;
