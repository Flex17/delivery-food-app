import OrderCard from "../OderCard/OrderCard";
import { cartAPI } from "@api/CartAPI";
import { useAppSelector } from "@hooks/redux";
import css from "./orderList.module.scss";

const OrderList = () => {
	const localId = useAppSelector(state => state.authReducer.localId);

	const { data: products } = cartAPI.useGetCartQuery({ localId });

	return (
		<div className={css.wrapper}>
			{
				products?.map(orderData => <OrderCard key={orderData.product.id} cardData={orderData}/>
				)
			}
		</div>
	);
};

export default OrderList;
