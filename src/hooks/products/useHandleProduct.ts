import { IOrderProduct } from "../../models/order";
import { orderSlice } from "../../redux/reducers/OrderSlice";
import { useAppDispatch, useAppSelector } from "../redux";

export const useHandleProduct = () => {
	const dispatch = useAppDispatch();

	const orderProducts = useAppSelector(state => state.orderReducer.products);

	const addProduct = (product: IOrderProduct) => {
		if (product.quantity > 1) {
			const index = orderProducts.findIndex(({ product: item }) => item.id === product.product.id);
			if (index !== -1) {
				const updatedProducts = [...orderProducts];
				updatedProducts[index] = {
					...updatedProducts[index],
					quantity: updatedProducts[index].quantity + 1
				};
				dispatch(orderSlice.actions.setProducts(updatedProducts));
			}
		} else {
			dispatch(orderSlice.actions.addProduct(product));
		}
	};

	const removeProduct = (product: IOrderProduct) => {
		const index = orderProducts.findIndex(({ product: item }) => item.id === product.product.id);
		if (index !== -1) {
			const updatedProducts = [...orderProducts];
			updatedProducts[index] = {
				...updatedProducts[index],
				quantity: updatedProducts[index].quantity - 1
			};
			if (updatedProducts[index].quantity === 0) {
				updatedProducts.splice(index, 1);
			}
			dispatch(orderSlice.actions.setProducts(updatedProducts));
		}
	};

	return {
		addProduct,
		removeProduct,
	};
};
