import { ICartProduct } from "../models/product";
import { IOrderProduct, OrderData } from "../models/order";
import { IAuthRequest } from "../models/user";

export interface IHandleProductRequest extends IAuthRequest {
	product: ICartProduct;
}

export interface IAddProductRequest extends IAuthRequest {
	product: IOrderProduct;
}

export interface IGetUserRequest {
	token: string,
}

export interface IGetProductsRequest {
	auth: string,
	startAt: number,
	endAt: number
}

export interface IMakeOrderResponse {
	name: string;
}

export interface IHistoryOrderData extends OrderData {
	id: string,
}

export type TOTAL_RESPONSE = number;
