import { ordersAPI } from "../../api/OrdersAPI";
import Loader from "../../ui/Loader/Loader";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { useCalculateAmount } from "../../hooks/useCalculateAmount";
import OrderList from "./OrderList/OrderList";
import Title from "../../ui/Title/Title";
import OrderForm from "./OrderForm/OrderForm";
import { orderSlice } from "../../redux/reducers/OrderSlice";
import { Navigate } from "react-router-dom";
import { pathKeys } from "../Router/config";
import InfoText from "../../ui/InfoText/InfoText";
import css from "./order.module.scss";
import { OrderData } from "../../models/order";

const Order = () => {
	const dispatch = useAppDispatch();

	const token = localStorage.getItem("access_token");
	const localId = useAppSelector(state => state.authReducer.localId);

	const orderData = useAppSelector(state => state.orderReducer);

	const [makeOrder, {
		isLoading,
		data: response
	}] = ordersAPI.useMakeOrderMutation();

	useCalculateAmount();
	const onOrder = async () => {
		try {
			const data: OrderData = {
				...orderData,
				auth: token || "",
				localId,
			};

			await makeOrder(data);
			dispatch(orderSlice.actions.resetOrder());
		} catch (error) {
			console.log(error);
		}
	};

	if (isLoading) {
		return <Loader/>;
	}

	if (response) {
		return <Navigate to={pathKeys.successOrderId(orderData.orderId)}/>;
	}

	if (!orderData.products.length) {
		return <InfoText>Ваша корзина пуста...</InfoText>;
	}

	return (
		<div className={css.wrapper}>
			<Title>Оформить заказ</Title>
			<OrderList/>
			<div className={css.sum}>Итого: {orderData.totalPrice} ₽</div>
			<OrderForm submit={onOrder}/>
		</div>
	);
};

export default Order;
