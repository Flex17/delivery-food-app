import { IProduct } from "../../../models/product";
import css from "./productList.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useHandleProduct } from "../../../hooks/products/useHandleProduct";
import { useAppSelector } from "../../../hooks/redux";
import { useMergeArrays } from "../../../hooks/useMergeArrays";

interface ProductListProps {
	products: IProduct[];
}

const ProductList = ({ products }: ProductListProps) => {
	const orderProducts = useAppSelector(state => state.orderReducer.products);

	const preparedProducts = useMergeArrays(orderProducts, products);

	const {
		addProduct,
		removeProduct
	} = useHandleProduct();

	return (
		<div className={css.wrapper}>
			{
				preparedProducts?.map(product => (
					<ProductCard
						removeProduct={removeProduct}
						addProduct={addProduct}
						key={product.product.id}
						product={product}
					/>
				))}
		</div>
	);
};

export default ProductList;
