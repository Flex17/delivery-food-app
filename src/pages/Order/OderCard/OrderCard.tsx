import css from "./orderCard.module.scss";
import { useTranslation } from "react-i18next";
import { useOrderCardRequest } from "@hooks/useOrderCardRequest";
import { ICartProduct } from "@models/product";
import MainButton from "@ui/MainButton/MainButton";
import QuantityBlock from "@ui/QuantityBlock/QuantityBlock";

interface OrderCardProps {
	cardData: ICartProduct,
}

const OrderCard = ({ cardData }: OrderCardProps) => {
	const { t } = useTranslation();

	const {
		quantity,
		product
	} = cardData;

	const {
		img,
		name,
		price,
		description,
	} = product;

	const {
		onRemove,
		onDecrease,
		onIncrease
	} = useOrderCardRequest();

	return (
		<div className={css.wrapper}>
			<img className={css.picture} src={img} alt={name}/>
			<div className={css.description_block}>
				<h4 className={css.title}>{name}</h4>
				<p className={css.description}>{description}</p>
				<div className={css.price_container}>
					<div className={css.price_block}>{t("history.card.price")}: {price} ₽</div>
					<div className={css.price_block}>{t("history.card.cost")}: {price * quantity} ₽</div>
				</div>
			</div>
			<QuantityBlock
				onAdd={() => onIncrease(cardData)}
				onRemove={() => onDecrease(cardData)}
				count={quantity}
			/>
			<MainButton
				onClick={() => onRemove(cardData)}
				styles={css.btn}
				state="default"
			>
				{t("cart.form.delete")}
			</MainButton>
		</div>
	);
};

export default OrderCard;
