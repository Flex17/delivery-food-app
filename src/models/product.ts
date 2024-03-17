export interface IProduct {
	id: number,
	name: string,
	price: number,
	description: string,
	img: string,
}

export interface ICartProduct {
	id: string,
	product: IProduct,
	quantity: number,
}
