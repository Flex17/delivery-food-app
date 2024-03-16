import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../models/product";

interface ProductsStateI {
	products: IProduct[],
	total: number,
	startAt: number,
	endAt: number,
}

const initialState: ProductsStateI = {
	total: 0,
	products: [],
	startAt: 1,
	endAt: 8,
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
		},
		increaseStartAt(state, action: PayloadAction<number>) {
			state.startAt += action.payload;
		},
		increaseEndAt(state, action: PayloadAction<number>) {
			state.endAt += action.payload;
		},
	},
});

export default productsSlice.reducer;
