import { ICartProduct, IProduct } from "./product";
import { PaymentMethodT } from "../ui/Dropdown/DropdownItem/DropdownItem";
import { IAuthRequest } from "./user";

export interface IOrderProduct {
	product: IProduct,
	quantity: number,
}

export interface OrderData extends IAuthRequest {
	products: ICartProduct[],
	totalPrice: number,
	address: string,
	paymentMethod: PaymentMethodT,
}
