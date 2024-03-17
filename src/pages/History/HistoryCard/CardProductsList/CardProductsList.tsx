import { IOrderProduct } from "../../../../models/order";
import css from "./cardProductList.module.scss";
import CardProduct from "../CardProduct/CardProduct";

interface CardProductsList {
	products: IOrderProduct[],
}

const CardProductsList = ({ products }: CardProductsList) => {

	return (
		<div className={css.wrapper}>
			{
				products?.map(productData => {

					return (
						<CardProduct productData={productData} key={productData.product.id}/>
					);
				})
			}
		</div>
	);
};

export default CardProductsList;
