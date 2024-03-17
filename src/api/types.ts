import { ICartProduct } from "../models/product";
import { IOrderProduct, OrderData } from "../models/order";
import { IAuthRequest, IUser, IUserInfo } from "../models/user";

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

export interface IRegistrationRequest extends IUser {
	displayName: string,
}

export interface RegistrationResponse {
	idToken: string,
	email: string,
	localId: string,
	displayName: string,
	refreshToken: string,
}

export interface GetUserResponse {
	users: IUserInfo[];
}
