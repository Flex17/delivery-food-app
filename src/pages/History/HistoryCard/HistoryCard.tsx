import { HistoryOrderDataI } from "../../../api/OrdersAPI";
import css from "./historyCard.module.scss";

interface HistoryCardProps {
	data: HistoryOrderDataI,
}

const HistoryCard = ({ data }: HistoryCardProps) => {
	const {
		products,
		totalPrice,
		paymentMethod,
		address,
		id,
	} = data;

	return (
		<div className={css.wrapper}>
			<div className={css.main_info}>
				<span className={css.num}>Номер заказа: {id}</span>
				<span>Стоимость: {totalPrice} ₽</span>
				<span>Адресс: {address}</span>
				<span>Метод оплаты: {paymentMethod}</span>
			</div>
			<span>Продукты:</span>
			<div className={css.products}>
				{
					products.map(({
						product,
						quantity
					}) => {
						return (
							<div className={css.product} key={product.id}>
								<img className={css.picture} src={product.img} alt={product.name}/>
								<div className={css.product_info}>
									<div>Название: {product.name}</div>
									<div>{product.name}</div>
									<div>Цена: {product.price}</div>
									<div>Количество: {quantity}</div>
								</div>
							</div>
						);
					})
				}
			</div>
		</div>
	);
};

export default HistoryCard;
