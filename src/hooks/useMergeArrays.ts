import { IProduct } from "../models/product";
import { IOrderProduct } from "../models/order";

export const useMergeArrays = (orderProducts: IOrderProduct[], products: IProduct[]): IOrderProduct[] => {
	// Создаем хэш-таблицу для быстрого доступа к товарам из первого массива
	const orderProductMap: { [key: number]: number } = {};
	for (const orderProduct of orderProducts) {
		orderProductMap[orderProduct.product.id] = orderProduct.quantity;
	}

	// Создаем новый массив на основе второго массива
	const mergedArray: IOrderProduct[] = products?.map(product => ({
		product,
		quantity: orderProductMap[product.id] || 0 // Если товар отсутствует в первом массиве, quantity = 0
	}));

	return mergedArray;
};
