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
import { useAuthToken } from "../../hooks/useAuth";
import { useTranslation } from "react-i18next";

const Order = () => {
	const { t } = useTranslation();

	const dispatch = useAppDispatch();

	const localId = useAppSelector(state => state.authReducer.localId);
	const orderData = useAppSelector(state => state.orderReducer);

	const auth = useAuthToken();

	const [makeOrder, {
		isLoading,
		data: response
	}] = ordersAPI.useMakeOrderMutation();

	useCalculateAmount();
	const onOrder = async () => {
		try {
			const data: OrderData = {
				...orderData,
				auth,
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
		return <InfoText>{t("cart.empty")}</InfoText>;
	}

	return (
		<div className={css.wrapper}>
			<Title>{t("cart.title")}</Title>
			<OrderList/>
			<div className={css.sum}>{t("cart.totalCost")}: {orderData.totalPrice} ₽</div>
			<OrderForm submit={onOrder}/>
		</div>
	);
};

export default Order;
