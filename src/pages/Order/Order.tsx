import { ordersAPI } from "../../api/OrdersAPI";
import Loader from "../../ui/Loader/Loader";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import OrderList from "./OrderList/OrderList";
import Title from "../../ui/Title/Title";
import OrderForm from "./OrderForm/OrderForm";
import { Navigate } from "react-router-dom";
import { pathKeys } from "../Router/config";
import css from "./order.module.scss";
import { useTranslation } from "react-i18next";
import { cartAPI } from "../../api/CartAPI";
import InfoText from "../../ui/InfoText/InfoText";
import { useMemo } from "react";
import { orderSlice } from "../../redux/reducers/OrderSlice";

const Order = () => {
	const { t } = useTranslation();

	const dispatch = useAppDispatch();

	const orderData = useAppSelector(state => state.orderReducer);

	const localId = useAppSelector(state => state.authReducer.localId);

	const [makeOrder, {
		data: orderResponse,
		isLoading: isOrderLoading,
	}] = ordersAPI.useMakeOrderMutation();

	const [clearCart] = cartAPI.useClearCartMutation();
	const [updateOrders] = ordersAPI.useLazyGetAllQuery();

	const {
		data: cartData,
		isLoading: isCartLoading
	} = cartAPI.useGetCartQuery({ localId });

	const cost = useMemo(() => {
		return cartData?.reduce((total, {
			quantity,
			product
		}) => total + (product.price * quantity), 0);
	}, [cartData]);

	const onOrder = async () => {
		try {
			if (cartData && cost) {
				await makeOrder({
					...orderData,
					products: cartData,
					localId,
					totalPrice: cost,
				});
				await Promise.all([clearCart({ localId }), updateOrders({ localId })]);
			}

			dispatch(orderSlice.actions.resetOrder());
		} catch (error) {
			console.log(error);
		}
	};

	if (isOrderLoading || isCartLoading) {
		return <Loader/>;
	}

	if (orderResponse) {
		return <Navigate to={pathKeys.successOrderId(orderResponse.name)}/>;
	}

	if (!cartData?.length) {
		return <InfoText>{t("cart.empty")}</InfoText>;
	}

	return (
		<div className={css.wrapper}>
			<Title>{t("cart.title")}</Title>
			<OrderList/>
			<span className={css.sum}>{t("cart.totalCost")}: {cost} ₽</span>
			<OrderForm submit={onOrder}/>
		</div>
	);
};

export default Order;
