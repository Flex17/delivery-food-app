import css from "./productCard.module.scss";
import { useState } from "react";
import MainButton from "../../../ui/MainButton/MainButton";
import QuantityBlock from "./QuantityBlock/QuantityBlock";
import { IOrderProduct } from "../../../models/order";

interface ProductCardProps {
	product: IOrderProduct,
	addProduct: (product: IOrderProduct) => void,
	removeProduct: (product: IOrderProduct) => void,
}

const ProductCard = ({
	product,
	removeProduct,
	addProduct
}: ProductCardProps) => {
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

	const [count, setCount] = useState(() => quantity);

	const onAdd = () => {

		const addingProduct: IOrderProduct = {
			product: { ...productData },
			quantity: count + 1,
		};

		setCount(prev => prev + 1);
		addProduct(addingProduct);
	};

	const onRemove = () => {
		if (count > 0) {
			setCount(prev => prev - 1);
			const addingProduct: IOrderProduct = {
				product: { ...productData },
				quantity: count,
			};
			removeProduct(addingProduct);
		}
	};

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
				count > 0
					? <QuantityBlock onAdd={onAdd} onRemove={onRemove} count={count}/>
					: <MainButton
						state="default"
						onClick={onAdd}
					>
						Добавить в корзину
					</MainButton>
			}
		</div>
	);
};

export default ProductCard;
