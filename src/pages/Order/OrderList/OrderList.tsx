import OrderCard from "../OderCard/OrderCard";
import css from "./orderList.module.scss";
import { cartAPI } from "../../../api/CartAPI";
import { useAuthToken } from "../../../hooks/useAuth";

const OrderList = () => {
	const authData = useAuthToken();

	const { data: products } = cartAPI.useGetCartQuery(authData);

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
