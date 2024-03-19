import { cartAPI } from "@api/CartAPI";
import { IOrderProduct } from "@models/order";
import { ICartProduct } from "@models/product";
import { useAppSelector } from "./redux";

export const useOrderCardRequest = () => {
	const [remove] = cartAPI.useRemoveProductMutation();
	const [add] = cartAPI.useAddProductMutation();
	const [update] = cartAPI.useUpdateProductQuantityMutation();

	const localId = useAppSelector(state => state.authReducer.localId);

	const onAdd = async (product: IOrderProduct) => {
		try {
			await add({
				localId,
				product
			});
		} catch (e) {
			console.log("Error");
		}
	};
	const onRemove = async (product: ICartProduct) => {
		try {
			await remove({
				localId,
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
					localId,
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
					localId,
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
