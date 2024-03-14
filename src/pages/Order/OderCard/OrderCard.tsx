import { IOrderProduct } from "../../../models/order";
import css from "./orderCard.module.scss";
import QuantityBlock from "../../Menu/ProductCard/QuantityBlock/QuantityBlock";
import MainButton from "../../../ui/MainButton/MainButton";
import { useAppDispatch } from "../../../hooks/redux";
import { orderSlice } from "../../../redux/reducers/OrderSlice";
import { useHandleProduct } from "../../../hooks/products/useHandleProduct";

interface OrderCardProps {
	cardData: IOrderProduct,
}

const OrderCard = ({ cardData }: OrderCardProps) => {
	const {
		product,
		quantity
	} = cardData;

	const {
		img,
		name,
		price,
		description,
	} = product;

	const dispatch = useAppDispatch();

	const {
		removeProduct,
		addProduct
	} = useHandleProduct();

	const onAdd = () => {
		addProduct({
			...cardData,
			quantity: quantity + 1
		});
	};

	const onRemove = () => {
		removeProduct(cardData);
	};

	const onDelete = () => {
		dispatch(orderSlice.actions.removeProduct(cardData));
	};

	return (
		<div className={css.wrapper}>
			<img className={css.picture} src={img} alt={name}/>
			<div className={css.description_block}>
				<h4 className={css.title}>{name}</h4>
				<p className={css.description}>{description}</p>
				<div className={css.price_container}>
					<div className={css.price_block}>Цена: {price} ₽</div>
					<div className={css.price_block}>Стоимость: {price * quantity} ₽</div>
				</div>
			</div>
			<QuantityBlock onAdd={onAdd} onRemove={onRemove} count={quantity}/>
			<MainButton onClick={onDelete} styles={css.btn} state="default">Удалить</MainButton>
		</div>
	);
};

export default OrderCard;
