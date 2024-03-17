import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaymentMethodT } from "../../ui/Dropdown/DropdownItem/DropdownItem";

interface OrderStateI {
	address: string,
	paymentMethod: PaymentMethodT,
}

const initialState: OrderStateI = {
	address: "",
	paymentMethod: "" as PaymentMethodT,
};

export const orderSlice = createSlice({
	name: "order",
	initialState,
	reducers: {
		setAddress(state, action: PayloadAction<string>) {
			state.address = action.payload;
		},
		setPaymentMethod(state, action: PayloadAction<PaymentMethodT>) {
			state.paymentMethod = action.payload;
		},
		resetOrder(state) {
			state.address = "";
			state.paymentMethod = "" as PaymentMethodT;
		},
	},
});

export default orderSlice.reducer;
