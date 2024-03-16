import css from "./productList.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import { IOrderProduct } from "../../../models/order";

interface ProductListProps {
	products: IOrderProduct[];
	removeProduct: (product: IOrderProduct) => void;
	addProduct: (product: IOrderProduct) => void;
}

const ProductList = ({
	products,
	addProduct,
	removeProduct,
}: ProductListProps) => (
	<div className={css.wrapper}>
		{
			products.map(product => (
				<ProductCard
					removeProduct={removeProduct}
					addProduct={addProduct}
					key={product.product.id}
					product={product}
				/>
			))}
	</div>
);

export default ProductList;
