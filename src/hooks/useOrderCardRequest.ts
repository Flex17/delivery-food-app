import { cartAPI } from "../api/CartAPI";
import { useAuthToken } from "./useAuth";
import { IOrderProduct } from "../models/order";
import { ICartProduct } from "../models/product";

export const useOrderCardRequest = () => {
	const [remove] = cartAPI.useRemoveProductMutation();
	const [add] = cartAPI.useAddProductMutation();
	const [update] = cartAPI.useUpdateProductQuantityMutation();

	const authData = useAuthToken();

	const onAdd = async (product: IOrderProduct) => {
		try {
			await add({
				...authData,
				product
			});
		} catch (e) {
			console.log("Error");
		}
	};
	const onRemove = async (product: ICartProduct) => {
		try {
			await remove({
				...authData,
				product
			});
		} catch (e) {
			console.log("Error");
		}
	};

	const onIncrease = async (product: ICartProduct) => {
		try {
			if (product.quantity >= 1) {
				await update({
					...authData,
					product: {
						...product,
						quantity: product.quantity + 1,
					}
				});
			} else {
				await onAdd({
					product: product.product,
					quantity: 1,
				});
			}
		} catch (e) {
			console.log("Error");
		}
	};

	const onDecrease = async (product: ICartProduct) => {
		try {
			if (product.quantity === 1) {
				await onRemove(product);
			} else {
				await update({
					...authData,
					product: {
						...product,
						quantity: product.quantity - 1,
					}
				});
			}
		} catch (e) {
			console.log("Error");
		}
	};

	return {
		onRemove,
		onDecrease,
		onIncrease,
	};
};
