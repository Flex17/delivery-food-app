import { IProduct } from "../../../models/product";
import css from "./productList.module.scss";
import ProductCard from "../ProductCard/ProductCard";
import { useHandleProduct } from "../../../hooks/products/useHandleProduct";
import { useAppSelector } from "../../../hooks/redux";
import { useMergeArrays } from "../../../hooks/useMergeArrays";
import useDynamicPagination from "../../../hooks/useDynamicPagination";
import { productsAPI } from "../../../api/ProductsAPI";
import { useAuthToken } from "../../../hooks/useAuth";

interface ProductListProps {
	products: IProduct[];
	total: number,
}

const ProductList = ({
	products,
	total
}: ProductListProps) => {
	const orderProducts = useAppSelector(state => state.orderReducer.products);

	const preparedProducts = useMergeArrays(orderProducts, products);

	const auth = useAuthToken();

	const [loadProducts] = productsAPI.useGetAllMutation();

	productsAPI.useGetTotalQuery({ auth });

	const onLoadProducts = (startAt: number, endAt: number) => {
		return loadProducts({
			auth,
			startAt,
			endAt
		});
	};

	useDynamicPagination(products, total, onLoadProducts);

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
