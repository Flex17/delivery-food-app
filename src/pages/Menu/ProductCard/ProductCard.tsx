import css from "./productCard.module.scss";
import { useTranslation } from "react-i18next";
import { useOrderCardRequest } from "../../../hooks/useOrderCardRequest";
import QuantityBlock from "./QuantityBlock/QuantityBlock";
import MainButton from "../../../ui/MainButton/MainButton";
import { ICartProduct } from "../../../models/product";

interface ProductCardProps {
	product: ICartProduct,
}

const ProductCard = ({
	product,
}: ProductCardProps) => {
	const { t } = useTranslation();

	const {
		product: productData,
		quantity
	} = product;

	const {
		img,
		name,
		price,
		description
	} = productData;

	const {
		onDecrease,
		onIncrease,
	} = useOrderCardRequest();

	const addProduct = async () => await onIncrease(product);

	const removeProduct = async () => await onDecrease(product);

	return (
		<div className={css.wrapper}>
			<div className={css.picture_block}>
				<img className={css.picture} src={img} alt={name}/>
				<div className={css.price}><span>{price} ₽</span></div>
			</div>
			<h4 className={css.name}>{name}</h4>
			<p className={css.description}>
				{description}
			</p>
			{
				quantity > 0
					? <QuantityBlock
						onAdd={addProduct}
						onRemove={removeProduct}
						count={quantity}
					/>
					: <MainButton
						state="default"
						onClick={addProduct}
					>
						{t("productCard.toCart")}
					</MainButton>
			}
		</div>
	);
};

export default ProductCard;
