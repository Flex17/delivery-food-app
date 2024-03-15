import { HistoryOrderDataI } from "../../../api/OrdersAPI";
import css from "./historyCard.module.scss";
import { useTranslation } from "react-i18next";

interface HistoryCardProps {
	data: HistoryOrderDataI,
}

const HistoryCard = ({ data }: HistoryCardProps) => {
	const { t } = useTranslation();

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
				<span className={css.num}>{t("history.card.orderNumber")}: {id}</span>
				<span>{t("history.card.cost")}: {totalPrice} ₽</span>
				<span>{t("history.card.address")}: {address}</span>
				<span>{t("history.card.payment")}: {paymentMethod}</span>
			</div>
			<span>{t("history.card.products")}:</span>
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
									<div>{t("history.card.title")}: {product.name}</div>
									<div>{t("history.card.price")}: {product.price}</div>
									<div>{t("history.card.quantity")}: {quantity}</div>
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
