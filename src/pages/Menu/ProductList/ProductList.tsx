import css from "./productList.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import { ICartProduct } from "@models/product";

interface ProductListProps {
	products: ICartProduct[];
}

const ProductList = ({
	products,
}: ProductListProps) => {

	return (
		<div className={css.wrapper}>
			{
				products.map(product => (
					<ProductCard
						key={product.product.id}
						product={product}
					/>
				))}
		</div>
	);
};

export default ProductList;
