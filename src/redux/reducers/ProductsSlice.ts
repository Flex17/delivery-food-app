import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../models/product";

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
		setProducts(state, action: PayloadAction<IProduct[]>) {
			state.products = [...state.products, ...action.payload];

		},
		setTotal(state, action: PayloadAction<number>) {
			state.total = action.payload;
		}
	},
});

export default productsSlice.reducer;
