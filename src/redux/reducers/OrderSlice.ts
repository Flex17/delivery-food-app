import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrderProduct } from "../../models/order";
import { PaymentMethodT } from "../../ui/Dropdown/DropdownItem/DropdownItem";

interface OrderStateI {
	products: IOrderProduct[],
	address: string,
	paymentMethod: PaymentMethodT,
	totalPrice: number,
	orderId: string,
}

const initialState: OrderStateI = {
	products: [],
	address: "",
	paymentMethod: "" as PaymentMethodT,
	totalPrice: 0,
	orderId: "",
};

export const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {
		setProducts(state, action: PayloadAction<IOrderProduct[]>) {
			state.products = action.payload;
		},
		addProduct(state, action: PayloadAction<IOrderProduct>) {
			state.products = [...state.products, action.payload];
		},
		removeProduct(state, action: PayloadAction<IOrderProduct>) {
			state.products = state.products.filter((product) => product.product.id !== action.payload.product.id);
		},
		setTotalPrice(state, action: PayloadAction<number>) {
			state.totalPrice = action.payload;
		},
		setAddress(state, action: PayloadAction<string>) {
			state.address = action.payload;
		},
		setPaymentMethod(state, action: PayloadAction<PaymentMethodT>) {
			state.paymentMethod = action.payload;
		},
		setOrderId(state, action: PayloadAction<string>) {
			state.orderId = action.payload;
		},
		resetOrder(state) {
			state.address = "";
			state.products = [];
			state.totalPrice = 0;
			state.paymentMethod = "" as PaymentMethodT;
		},
	},
});

export default orderSlice.reducer;
