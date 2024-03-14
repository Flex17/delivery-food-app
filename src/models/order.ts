import { IProduct } from "./product";
import { PaymentMethodT } from "../ui/Dropdown/DropdownItem/DropdownItem";

export interface IOrderProduct {
	product: IProduct,
	quantity: number,
}

export interface OrderData {
	products: IOrderProduct[],
	totalPrice: number,
	auth: string,
	localId: string,
	address: string,
	paymentMethod: PaymentMethodT,
}
