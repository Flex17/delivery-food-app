import { useAppSelector } from "../../../hooks/redux";
import OrderCard from "../OderCard/OrderCard";
import css from "./orderList.module.scss";

const OrderList = () => {
	const orders = useAppSelector(state => state.orderReducer.products);

	if (!orders.length) {
		return <div>Корзина пустая, добавьте продукты...</div>;
	}

	return (
		<div className={css.wrapper}>
			{orders.map(orderData => <OrderCard key={orderData.product.id} cardData={orderData}/>)}
		</div>
	);
};

export default OrderList;
