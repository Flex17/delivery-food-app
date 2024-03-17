import css from "./historyCard.module.scss";
import { useTranslation } from "react-i18next";
import CardProductsList from "./CardProductsList/CardProductsList";
import { IHistoryOrderData } from "../../../api/types";

interface HistoryCardProps {
	order: IHistoryOrderData,
}

const HistoryCard = ({ order }: HistoryCardProps) => {
	const { t } = useTranslation();

	const {
		products,
		totalPrice,
		paymentMethod,
		address,
		id,
	} = order;

	return (
		<div className={css.wrapper}>
			<div className={css.main_info}>
				<span className={css.num}>{t("history.card.orderNumber")}: #{id}</span>
				<span>{t("history.card.cost")}: {totalPrice} ₽</span>
				<span>{t("history.card.address")}: {address}</span>
				<span>{t("history.card.payment")}: {paymentMethod}</span>
			</div>
			<span>{t("history.card.products")}:</span>
			<CardProductsList products={products}/>
		</div>
	);
};

export default HistoryCard;
