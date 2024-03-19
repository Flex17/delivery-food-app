import css from "./cardProduct.module.scss";
import { IOrderProduct } from "@models/order";
import { useTranslation } from "react-i18next";

interface CardProductProps {
	productData: IOrderProduct,
}

const CardProduct = ({ productData }: CardProductProps) => {
	const { t } = useTranslation();

	const {
		product,
		quantity
	} = productData;
	const {
		name,
		id,
		img,
		price
	} = product;

	return (
		<div className={css.product} key={id}>
			<img className={css.picture} src={img} alt={name}/>
			<div className={css.product_info}>
				<div>{t("history.card.name")}: {name}</div>
				<div>{t("history.card.price")}: {price}</div>
				<div>{t("history.card.quantity")}: {quantity}</div>
			</div>
		</div>
	);
};

export default CardProduct;
