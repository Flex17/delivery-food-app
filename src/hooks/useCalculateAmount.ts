import { useAppDispatch, useAppSelector } from "./redux";
import { useEffect } from "react";
import { orderSlice } from "../redux/reducers/OrderSlice";

export const useCalculateAmount = () => {
	const dispatch = useAppDispatch();
	const products = useAppSelector(state => state.orderReducer.products);

	useEffect(() => {
		const newAmount = products.reduce((total, {
			quantity,
			product
		}) => total + (product.price * quantity), 0);

		dispatch(orderSlice.actions.setTotalPrice(newAmount));
	}, [products]);
};
